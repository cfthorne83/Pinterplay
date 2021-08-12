class Api::FriendshipsController < ApplicationController

    before_action :ensure_logged_in
    before_action :find_user, only: [:create, :destroy]

    def index 
        @user = current_user
        @follows = @user.following
        render :index
    end

    def create 
        current_user.follow(@user)
        # @friendship = Friendship.new(friendship_params)
        
        # current_user.active_friendships.create(followed_id: user.id)
        # @current_user = current_user
        render :show
    end

    def destroy
        debugger
        current_user.unfollow(@user)
        # debugger
        # @follow = Friendship.find(params[:friendshipId])
        # if @follow 
        #     @follow.destroy
        # end

    end

    private 

    def find_user 
s        # @user = User.find(params[:friendship][:followed_id])
        @user = User.find(params[:friendship][:followed_id])
    end

    def friendship_params
        params.require(:friendship).permit(:follower_id, :followed_id, :id)
    end

end
