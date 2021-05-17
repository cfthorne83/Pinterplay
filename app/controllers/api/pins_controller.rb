class Api::PinsController < ApplicationController

    before_action :ensure_logged_in

    def index
        if params[:data] && params[:data][:board]
            board = Board.find(params[:data][:board])
            @pins = board.pins
        elsif params[:data] && params[:data][:user]
            user = User.find(params[:data][:user])
            @pins = user.pins
        elsif params[:data] && params[:data][:follows]
            @pins = params[:data][:follows].map { |id| User.find(id).pins }.flatten
        elsif params[:limit] && params[:board]
            board = Board.find(params[:board][:id])
            @limit = true
            @pins = board.pins.limit(3)
        elsif params[:limit] && params[:user_id]
            user = User.find(params[:user_id])
            @limit = true
            @pins = user.pins.limit(3)
        else
            @pins = Pin.all
        end
        render :index
    end

    def show 
        # @goal = current_user.goals.find_by(id: params[:id])
        @pin = Pin.includes(:user).find(params[:id])
        @user = @pin.user
        render :show
    end
 
    def create
        @pin = Pin.new(pin_params)
        @pin.user_id = current_user.id
        if @pin.save 
            render "api/pins/show"
            # render json: {message: "Wooooh!!"}
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
