class Api::BoardsController < ApplicationController

    before_action :ensure_logged_in

    def index
        @boards = Board.all
        render :index
    end

    def show
        @board = Board.find(params[:id])
        render :show
    end

    def create 
        @board = Board.new(board_params)

        if @board.save
            render 'api/boards/show'
        else
            render @board.errors.full_messages, status: 422
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
        @board = Board.find_by(params[:id])

        if @board.update(board_params) && @board.user_id == current_user.id
            render 'api/boards/show'
        else
            render @board.errors.full_messages
        end
    end

    def destroy
        @board = current_user.board.find(params[:id])
        if @board
            @board.destroy
        else
            render 'api/boards/show'
        end
    end

    private

    def board_params
        params.require(:board).permit(:title, :user_id)
    end
end
