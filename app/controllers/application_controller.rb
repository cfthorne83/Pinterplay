class ApplicationController < ActionController::Base

    helper_method :current_user, :logged_in?

    private

    # def current_user
    #     @current_user ||= User.find_by(session_token: session[:session_token])
    # end 
    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        !!current_user
    end
    
    # def login(user)
    #     @current_user = user
    #     session[:session_token] = user.reset_session_token!
    # end
    def login(user)
        user.reset_session_token!
        session[:session_token] = user.session_token
        @current_user = user
    end
    
    def logout
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end

    def ensure_logged_in
        unless logged_in?
            render json: ['you are not logged in'], status: 401
        end
    end
    # def ensure_logged_in
    #   unless current_user
    #     render json: { base: ['invalid credentials'] }, status: 401
    #   end
    # end
    
end
