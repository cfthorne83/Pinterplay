# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

demo_user = User.create(
                        fname: "Demo", 
                        lname: "User", 
                        username:"demoUser", 
                        email: "demo@fakemail.com", 
                        password: "123456"
                    )

blue = Board.create(
                title: "Blue", 
                description: "Blue!", 
                user_id: demo_user.id   
            )            
light = Board.create(
                title: "Light", 
                description: "Pastel!", 
                user_id: demo_user.id   
            )
pink = Board.create(
                title: "Pink", 
                description: "Pink!", 
                user_id: demo_user.id   
            )
dark = Board.create(
                title: "Dark", 
                description: "Shadow!", 
                user_id: demo_user.id   
            )
gold = Board.create(
                title: "Gold", 
                description: "Gold!", 
                user_id: demo_user.id   
            )

boards = [blue, light, pink, dark, gold]
nums = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen"]

arr = []
(0..1).each do |board_i|
    (0..1).each do |i| 
        arr << [board_i, i]
    end
end

arr.shufffle.each do |inner|
    board = boards[inner[0]]
    i = inner[1]

    initial = board.title[0].downcase + i.to_s
    title = board.title + " " + nums[i]
    uri = "https://mypin-seeds.s3.amazonaws.com/#{initial}.jpg"
    
    pin = Pin.create(title: title, board_id: board.id, user_id: demo_user.id)
    if file = URI.open(uri)
        pin.photo.attach(io: file, filename: '#{initial}.jpg')
        pin.save
    end
end
