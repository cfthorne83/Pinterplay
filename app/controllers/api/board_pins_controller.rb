class Api::BoardPinsController < ApplicationController

    before_action :ensure_logged_in

    def create 
        @board_pin = BoardPin.create(board_pin_params)

        # if @board_pin
        #     BoardPin.create
        # end
    end

    def destroy
        @board_pin 
    end

    private 

    def board_pin_params 
        params.require(:board_pin).permit(:board_id, :pin_id)
    end

end
