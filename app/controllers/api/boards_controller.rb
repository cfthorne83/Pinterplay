class Api::BoardsController < ApplicationController

    before_action :ensure_logged_in

    def index
        # @boards = Board.all
        # @boards = Board.where(user_id: current_user.id)
        @boards = current_user.boards.includes(:pins)
        render :index
    end

    def show
        # @board = Board.find(params[:id])
        @board = current_user.boards.find(params[:id])
        # if @board.user_id == current_user.id
            render :show
        # else       
        #     render json: @board.errors.full_messages, status: 422
        # end
    end

    def create 
        @board = Board.new(board_params)
        @board.user_id = current_user.id
        
        if @board.save
            render 'api/boards/show'
            # render :show
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    def edit
        @board = Board.find(params[:id])
        
        if @board.id == current_user.id
            render :edit
        else
            render 'api/boards/show'
        end

    end

    def update
        @board = Board.find_by(id: params[:id])
        
        if @board.update(board_params) && @board.user_id == current_user.id           
            render 'api/boards/show'
        else       
            render json: @board.errors.full_messages, status: 422
        end
    end

    def destroy
        @board = current_user.boards.find(params[:id])

        @board.destroy
        #     render :show
        # else
        #     render json @board.errors.full_messages, status: 422
        # end
    end

    private

    def board_params
        params.require(:board).permit(:title, :description)
    end
end
