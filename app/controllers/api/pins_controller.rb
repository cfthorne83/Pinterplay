class PinsController < ApplicationController

    before_action :ensure_logged_in

    def index
        @pins = Pin.all
        render :index
    end

    def show 

    end

    def create
    end

    def edit
    
    end

    def update

    end

    def destroy

    end

    private

    def pin_params
        params.require(:pin).permit(:title, :user_id)
    end
end
