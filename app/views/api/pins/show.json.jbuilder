json.pin do 
    json.extract! @pin, :id, :title, :image_url, :user_id, :board_id, :description
    json.image_url url_for(@pin.photo)
end