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
                title: "Pastel", 
                description: "Pastel!", 
                user_id: demo_user.id   
            )
pink = Board.create(
                title: "Pink", 
                description: "Pink!", 
                user_id: demo_user.id   
            )
dark = Board.create(
                title: "Shadow", 
                description: "Shadow!", 
                user_id: demo_user.id   
            )
gold = Board.create(
                title: "Gold", 
                description: "Gold!", 
                user_id: demo_user.id   
            )

boards = ["blue", "light", "pink", "dark", "gold"]

boards.each do |board|
    (0..9).each do |index|

    end
end

pin = Pin.create(title: "Blue 0", board_id: blue.id, user_id: demo_user.id)
# file = File.open("/Users/christopherthorne/Desktop/fran-hogan-gMca5DJ25Qo-unsplash.jpg")
file = URI.open('https://mypin-seeds.s3.amazonaws.com/b0.jpg')
# file = open('https://i.ytimg.com/vi/MRfIkTwUxIw/maxresdefault.jpg')
# pin.photo.attach(io: file, filename: 'fran-hogan-gMca5DJ25Qo-unsplash.jpg')
pin.photo.attach(io: file, filename: 'test.jpg')
pin.save