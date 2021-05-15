class Api::FriendshipsController < ApplicationController

    before_action: :ensure_logged_in
    before_action: :find_user
    
    def create 
        current_user.follow(@user)
        # @friendship = Friendship.new()
    end

    def destroy
        current_user.unfollow(@user)
    end

    private 

    def find_user 
        @user = user.find(params[:user_id])
    end
end
