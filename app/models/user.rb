# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    attr_reader :password

    validates :email, :password_digest, presence: true
    validates :email, :username, uniqueness: true
    validates :password, allow_nil: true, length: {minimum: 6}
    # validates :username, :password_digest, :session_token, presence: true

    before_validation :ensure_session_token

    has_many :boards
    has_many :pins

    has_many :active_friendships, class_name: "Friendship", foreign_key: "follower_id",
        dependent: :destroy

    has_many :passive_friendships, class_name: "Friendship", foreign_key: "followed_id",
        dependent: :destroy

    has_many :following, through: :active_friendships, source: :followed
    has_many :followers, through: :passive_friendships, source: :follower

    def follow(user)
        active_friendships.create(followed_id: user.id)
    end

    def unfollow(user)
        active_friendships.find_by(followed_id: user.id).destroy
    end

    def following?(user)
        following.include?(user)    
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)

        return nil if user.nil?
        user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        BCrypt::Password.new(password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end
    
    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end
    
    private

    def self.generate_session_token
        SecureRandom.base64(64)
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

end

