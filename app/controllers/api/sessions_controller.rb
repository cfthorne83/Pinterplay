class Api::SessionsController < ApplicationController
    
    before_action :ensure_logged_in, only: [:destroy]

    def new
        @user = User.new
        render :new
    end

    def create
        @user = User.find_by_credentials(user_params[:email], user_params[:password])
       
        if @user
          login(@user)
          render "api/users/show"
        else
            render json: ["You missed a spot! Don't forget to add your email and password."], status: 401
        end
    end

    def destroy
        @user = current_user
        if @user
            logout
            render "api/users/show"
            # render json: {}
        else
            render json: ["No user currently logged in"], status: 404
        end
    end

    def user_params
        params.require(:user).permit(:email, :password)
    end
end

