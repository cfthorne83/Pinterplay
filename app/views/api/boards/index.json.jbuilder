@boards.each do |board|
    json.set! board.id do 
        json.extract! board, :id, :title, :description, :user_id, :pins
    end
end

# @boards.each do |board|
#   json.set! board.id do
#     json.partial! 'board', board: board
#   end
# end

# @boards.each do |board|
#   json.set! board.id do
#     json.partial! 'api/boards/board', board: board
#   end
# end