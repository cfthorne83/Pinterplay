json.board do 
    json.extract! @board, :id, :title, :description, :user_id
end