json.pin do 
    json.extract! @pin, :id, :title, :user_id, :description, :user
    json.extract! @user, :followers
    json.image_url url_for(@pin.photo)
end