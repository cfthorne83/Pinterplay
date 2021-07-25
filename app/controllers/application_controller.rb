class ApplicationController < ActionController::Base

    helper_method :current_user, :logged_in?

    private

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def ensure_logged_in
        unless logged_in?
            render json: ['you are not logged in'], status: 401
        end
    end

    def logged_in?
        !!current_user
    end

    def login(user)
        @current_user = user
        session[:session_token] = user.reset_session_token!
    end

    def logout
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end
end
