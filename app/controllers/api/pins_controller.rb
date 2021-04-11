class Api::PinsController < ApplicationController

    before_action :ensure_logged_in

    def index
        if params[:board]
            board = Board.find(params[:board][:id])
            @pins = board.pins
        else
            @pins = Pin.all
        end
        render :index
    end

    def show 
        # @goal = current_user.goals.find_by(id: params[:id])
        @pin = Pin.find(params[:id])
        render :show
    end
 
    def create
        @pin = Pin.new(pin_params)
        @pin.user_id = current_user.id
        debugger
        if @pin.save 
            # render "api/pins/show"
            render json {message: "Wooooh!!"}
        else
            render json: @pin.errors.full_messages
        end
    end

    def edit
        @pin = Pin.find(params[:id])

        if @pin.id == current_user.id
            render :edit
        else
            render "api/pins/show"
        end
    
    end

    def update
        @pin = Pin.find_by(id: params[:id])

        if @pin.update(pin_params) && @pin.user_id == current_user.id
            render "api/pins/show"
        else
            render json: @pin.errors.full_messages, status: 422
        end

    end

    def destroy
        @pin = current_user.pins.find(params[:id])

        @pin.destroy
    end

    private

    def pin_params
        params.require(:pin).permit(:title, :photo, :description, :board_id, :user_id)
    end
end
