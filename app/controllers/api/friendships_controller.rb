class Api::FriendshipsController < ApplicationController

    before_action :ensure_logged_in
    before_action :find_user, only: [:create, :destroy]

    def index 
        if params[:userId]
            @user = User.find(params[:userId])
        else 
            @user = current_user
        end
        @following = @user.following
        @followers = @user.followers
        render :index
    end

    def create 
        current_user.follow(@user)
        @follow = User.find(friendship_params[:followed_id])
        # @friendship = Friendship.new(friendship_params)
        
        # current_user.active_friendships.create(followed_id: user.id)
        # @current_user = current_user
        render :show
    end

    def destroy
        current_user.unfollow(@user)
        # @follow = Friendship.find(params[:friendshipId])
        # if @follow 
        #     @follow.destroy
        # end

    end

    private 

    def find_user 
       # @user = User.find(params[:friendship][:followed_id])
        @user = User.find(params[:friendship][:followed_id])
    end

    def friendship_params
        params.require(:friendship).permit(:follower_id, :followed_id, :userId)
    end

end
