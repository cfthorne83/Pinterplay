json.pin do 
    json.extract! @pin, :id, :title, :description, :board_id, :user_id, :image
end