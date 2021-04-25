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

boards.each do |board|
    (0..2).each do |i| 
        initial = board.to_s[0] + "i"
        title = "#{board}".capitalize + nums[i]
        uri = "https://mypin-seeds.s3.amazonaws.com/#{initial}.jpg"
debugger
        pin = Pin.create(title: title, board_id: board.id, user_id: demo_user.id)
        file = URI.open(uri)
        pin.photo.attach(io: file, filename: '#{initial}.jpg')
        pin.save
    end
end
