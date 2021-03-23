# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
demo_user = User.create(fname: "Demo", lname: "User", username:"demoUser", email: "demo@fakemail.com", password: "123456")

Board.create(title: "title1", description: "description1", user_id: demo_user.id)
Board.create(title: "title2", description: "description2", user_id: demo_user.id)
Board.create(title: "title3", description: "description3", user_id: demo_user.id)

Pin.create(title: "pin1", image: "https://i.pinimg.com/564x/b8/37/44/b8374405d939f619cbe3d6da220605fe.jpg")
Pin.create(title: "pin2", image: "https://i.pinimg.com/236x/e5/2e/fc/e52efc533c98cbc37d5e6220d5839f24.jpg")
Pin.create(title: "pin3", image: "https://i.pinimg.com/564x/2d/6e/28/2d6e28b21c53f7e36148392e798c2541.jpg")