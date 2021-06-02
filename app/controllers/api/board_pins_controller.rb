class Api::BoardPinsController < ApplicationController

    before_action :ensure_logged_in

    def create 

    end

    def destroy
        
    end

    private 

    def board_pin_params 
        params.require(:board_pin).permit(:board_id, :pin_id)
    end

end
