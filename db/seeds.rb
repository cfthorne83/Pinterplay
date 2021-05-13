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
    # (0..1).each do |i| 
i = 0
        # if (board_i < 3) && (i > 9)
        #     next
        # else
            board = boards[board_i]
            initial = board.title[0].downcase + i.to_s
            title = board.title + " " + nums[i]
            uri = "https://mypin-seeds.s3.amazonaws.com/#{initial}.jpg"

            file = URI.open(uri)
            pin = Pin.create(title: title, board_id: board.id, user_id: demo_user.id)
            pin.photo.attach(io: file, filename: '#{initial}.jpg')
            pin.save
        # end
    # end
end

chris_p_bacon = User.create(
                        fname: "Chris P.", 
                        lname: "Bacon", 
                        username:"chris.p.bacon", 
                        email: "chrisp@bacon.com", 
                        password: "123456"
                    )

bacon = Board.create(
                title: "Bacon", 
                description: "I'm hungry!", 
                user_id: chris_p_bacon.id   
            )

bacon_file1 = URI.open("https://mypin-seeds.s3.amazonaws.com/bacon1.jpg")
bacon_pin1 = Pin.create(title: "bacon one", board_id: bacon.id, user_id: chris_p_bacon.id)
bacon_pin1.photo.attach(io: bacon_file1, filename: 'bacon1.jpg')
bacon_pin1.save

bacon_file2 = URI.open("https://mypin-seeds.s3.amazonaws.com/+bacon2.jpg")
bacon_pin2 = Pin.create(title: "bacon two", board_id: bacon.id, user_id: chris_p_bacon.id)
bacon_pin2.photo.attach(io: bacon_file2, filename: 'bacon2.jpg')
bacon_pin2.save