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

Board.create([
    {
        title: "Fire", 
        description: "Fire!", 
        user_id: demo_user.id   
    },
    {
        title: "Water", 
        description: "Water!", 
        user_id: demo_user.id   
    },
    {
        title: "Earth", 
        description: "Earth!", 
        user_id: demo_user.id   
    },
    {
        title: "Air", 
        description: "Air!", 
        user_id: demo_user.id   
    },
    {
        title: "Ice", 
        description: "Ice!", 
        user_id: demo_user.id   
    }
])