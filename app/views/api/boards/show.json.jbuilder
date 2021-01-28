json.board do 
    json.extract! @board, :id, :title, :description, :user_id
end
# json.partial! 'api/boards/board', board: @board
# json.partial! 'board', board: @board
