json.array! @pins do |pin|
    json.extract! pin, :id, :title, :creator_id
    json.photoURL url_for(pin.photo)
end