class Api::UsersController < ApplicationController

    before_action :ensure_logged_in, only: [:show, :index]

    def create
        @user = User.new(user_params)
        debugger
        if @user.save
            login(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.includes(:followers, :following).find(params[:id])
        @pins = @user.pins[0..2]
        render :show
    end

    def index
        @users = User.all
        render :index
    end

    def update
         @user = User.find_by(id: params[:id])
        
        if @user.update(user_params) && @user.id == current_user.id           
            render 'api/users/show'
        else       
            render json: @user.errors.full_messages, status: 422
        end
    end


    def user_params
        params.require(:user).permit(
                                    :email, 
                                    :password, 
                                    :fname, 
                                    :lname, 
                                    :image_url, 
                                    :description, 
                                    :username)
    end
end