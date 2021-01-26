# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
demo_user = User.create(email: "demoEmail", password: "123456")

Board.create(title: "title1", description: "description1", user_id: demo_user.id)
Board.create(title: "title2", description: "description2", user_id: demo_user.id)
Board.create(title: "title3", description: "description3", user_id: demo_user.id)

