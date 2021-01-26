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
    validates :email, uniqueness: true
    validates :password, allow_nil: true, length: {minimum: 6}
    # validates :username, :password_digest, :session_token, presence: true
    # validates :username, uniqueness: true
    # validates :password, length: { minimum: 6 }, allow_nil: true

    before_validation :ensure_session_token

    has_many :boards

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
    
    # def reset_session_token!
    #     self.session_token = User.generate_session_token
    #     self.save!
    #     self.session_token
    # end

    def reset_session_token!
        generate_unique_session_token
        save!
        self.session_token
    end
    
    private

    # def self.generate_session_token
    #     SecureRandom.base64(64)
    # end

    def new_session_token
        SecureRandom.urlsafe_base64
    end

    def ensure_session_token
        # self.session_token ||= User.generate_session_token
        generate_unique_session_token unless self.session_token
    end

    def generate_unique_session_token
        self.session_token = new_session_token
        while User.find_by(session_token: self.session_token)
          self.session_token = new_session_token
        end
        self.session_token
    end
end

