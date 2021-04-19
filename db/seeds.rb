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
        title: "Fire", 
        description: "Fire!", 
        user_id: demo_user.id   
    )
#     {
#         title: "Water", 
#         description: "Water!", 
#         user_id: demo_user.id   
#     },
#     {
#         title: "Earth", 
#         description: "Earth!", 
#         user_id: demo_user.id   
#     },
#     {
#         title: "Air", 
#         description: "Air!", 
#         user_id: demo_user.id   
#     },
#     {
#         title: "Ice", 
#         description: "Ice!", 
#         user_id: demo_user.id   
#     }
# ])

# demo_user = User.create(username: "Andy", email: "andy@email.com", password: "password")

pin = Pin.create(title: "test", board_id: board.id)

file = open('https://mypin-ct-pro.us-east-1.amazonaws.com/https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29kZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')

# pin.photo.attach(io: file, filename: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29kZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')