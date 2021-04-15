# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
demo_user = User.create(
                        fname: "Demo", 
                        lname: "User", 
                        username:"demoUser", 
                        email: "demo@fakemail.com", 
                        password: "123456"
                    )

board = Board.create(
                        title: "board1", 
                        description: "description1", 
                        user_id: demo_user.id
                    )   

Pin.create(
            title: "pin1", 
            user_id: demo_user.id,
            board_id: board.id
        )

Pin.create(
            title: "pin2",
            user_id: demo_user.id,
            board_id: board.id
        )

Pin.create(
            title: "pin3",
            user_id: demo_user.id,
            board_id: board.id
        )