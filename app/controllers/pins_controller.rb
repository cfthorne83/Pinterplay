class PinsController < ApplicationController

    def index
        @pins = Pin.all
        render :index
    end

    def pin_params
        params.require(:pin).permit(:title, :creator_id)
    end
end
