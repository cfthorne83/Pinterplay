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

board = Board.create(
        title: "Abstract", 
        description: "Abstract stuff!", 
        user_id: demo_user.id   
    )
#     {
#         title: "Geometric", 
#         description: "Geometric stuff!", 
#         user_id: demo_user.id   
#     },
#     {
#         title: "Distorted", 
#         description: "Distorted stuff!", 
#         user_id: demo_user.id   
#     },
#     {
#         title: "Representational", 
#         description: "Representational stufff!", 
#         user_id: demo_user.id   
#     },
#     {
#         title: "Figurative", 
#         description: "Figurative stuff!", 
#         user_id: demo_user.id   
#     }
# ])

pin = Pin.create(title: "test", board_id: board.id, user_id: demo_user.id)
# file = File.open("/Users/christopherthorne/Desktop/fran-hogan-gMca5DJ25Qo-unsplash.jpg")
file = URI.open('https://mypin-seeds.s3.amazonaws.com/fran-hogan-gMca5DJ25Qo-unsplash.jpg')
# file = open('https://i.ytimg.com/vi/MRfIkTwUxIw/maxresdefault.jpg')
# pin.photo.attach(io: file, filename: 'fran-hogan-gMca5DJ25Qo-unsplash.jpg')
pin.photo.attach(io: file, filename: 'test.jpg')
pin.save