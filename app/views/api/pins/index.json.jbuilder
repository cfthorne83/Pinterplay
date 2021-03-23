@pins.each do |pin|
    json.set! pin.id do 
        json.extract! pin, :id, :title
        # , :description, :board_id, :user_id, :image
    end
end