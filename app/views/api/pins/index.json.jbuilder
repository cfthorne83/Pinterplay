# @pins.each do |pin|
#     json.set! pin.id do 
#         json.extract! pin, :id, :title, :image_url, :user_id, :board_id, :description
#     end
# end

if @limit
    json.array! @pins do |pin|
        json.extract! pin, :id, :title, :user_id, :description
        json.image_url url_for(pin.photo)
    end
else
    @pins.each do |pin|
       json.set! pin.id do 
           json.extract! pin, :id, :title, :user_id, :description
           json.image_url url_for(pin.photo)
       end
    end
end