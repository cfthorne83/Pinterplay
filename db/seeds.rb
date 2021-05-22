# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

demo_user = User.create(
                        fname: "Sophia", 
                        lname: "Patrillo", 
                        username:"Sophia", 
                        email: "demo@fakemail.com", 
                        password: "123456",
                        image_url: "images/sophia.jpeg"
                    ) 

blue = Board.create(
                title: "Blue", 
                description: "Blue!", 
                user_id: demo_user.id   
            )            
pink = Board.create(
                title: "Pink", 
                description: "Pink!", 
                user_id: demo_user.id   
            )
gold = Board.create(
                title: "Gold", 
                description: "Gold!", 
                user_id: demo_user.id   
            )
dark = Board.create(
                title: "Black", 
                description: "Shadow!", 
                user_id: demo_user.id   
            )

boards = [blue, pink, gold, dark]
nums = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen"]

(0..3).each do |board_i|
    (0..9).each do |i| 
        # if (board_i < 3) && (i > 9)
        #     next
        # else

        board = boards[board_i]
        if board != dark
            initial = board.title[0].downcase + i.to_s
            title = board.title + " " + nums[i]
        else 
            initial = "d" + i.to_s
            title = "Black " + nums[i]
        end

        uri = "https://mypin-seeds.s3.amazonaws.com/#{initial}.jpg"
        file = URI.open(uri)
        pin = Pin.create(title: title, board_id: board.id, user_id: demo_user.id)
        pin.photo.attach(io: file, filename: '#{initial}.jpg')
        pin.save
        # end
    end
end

dorothy = User.create(
                        fname: "Dorothy", 
                        lname: "Zbornak", 
                        username:"Dorothy", 
                        email: "dorothy@ggirl.com", 
                        password: "123456"
                    )

light = Board.create(
                title: "Light", 
                description: "Pastel!", 
                user_id: dorothy.id   
            )

(0..9).each do |i| 

    board = light
    initial = board.title[0].downcase + i.to_s
    title = board.title + " " + nums[i]
    
    uri = "https://mypin-seeds.s3.amazonaws.com/#{initial}.jpg"
    file = URI.open(uri)
    pin = Pin.create(title: title, board_id: board.id, user_id: dorothy.id)
    pin.photo.attach(io: file, filename: '#{initial}.jpg')
    pin.save
end

demo_user.follow(dorothy)
dorothy.follow(demo_user)

# bacon_file1 = URI.open("https://mypin-seeds.s3.amazonaws.com/bacon1.jpg")
# bacon_pin1 = Pin.create(title: "bacon one", board_id: bacon.id, user_id: chris_p_bacon.id)
# bacon_pin1.photo.attach(io: bacon_file1, filename: 'bacon1.jpg')
# bacon_pin1.save

# bacon_file2 = URI.open("https://mypin-seeds.s3.amazonaws.com/+bacon2.jpg")
# bacon_pin2 = Pin.create(title: "bacon two", board_id: bacon.id, user_id: chris_p_bacon.id)
# bacon_pin2.photo.attach(io: bacon_file2, filename: 'bacon2.jpg')
# bacon_pin2.save