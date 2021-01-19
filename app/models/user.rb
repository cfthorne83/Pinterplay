class User < ApplicationRecord
    attr_reader :password

    validates :username, :password_digest, presence: true
    validates :username, uniqueness: true
    validates :password, allow_nil: true, length: {minimum: 6}

    before_validation :ensure_session_token

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)

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

