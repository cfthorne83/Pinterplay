class Api::FriendshipsController < ApplicationController

    before_action :ensure_logged_in
    before_action :find_user
    
    def create 
        # current_user.follow(@user)
        debugger
        @friendship = Friendship.new(friendship_params)
        # current_user.active_friendships.create(followed_id: user.id)
    end

    def destroy
        current_user.unfollow(@user)
    end

    private 

    def find_user 
        @user = User.find(params[:followed_id])
    end

    def friendship_params
        params.require(:friendship).permit(:follower_id, :followed_id)
    end

    end
