# @pins.each do |pin|
#     json.set! pin.id do 
#         json.extract! pin, :id, :title, :image_url, :user_id, :board_id, :description
#     end
# end

@pins.each do |pin|
    # debugger
    json.set! pin.id do 
        # json.extract! pin, :id, :title, :user_id, :board_id, :description
        json.image_url url_for(pin.photo)
    end
end

# json.array! @pins do |pin|
#     json.extract! pin, :id, :title, :user_id, :board_id, :description
#     json.image_url url_for(pin.photo)
# end