# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'


# users-------------------------------------------------------------------------

sophia = User.create(
                        fname: "Sophia", 
                        lname: "Patrillo", 
                        username:"Sophia", 
                        email: "demo@fakemail.com", 
                        password: "123456",
                        image_url: "images/sophia.jpeg"
                    ) 

dorothy = User.create(
                        fname: "Dorothy", 
                        lname: "Zbornak", 
                        username:"Dorothy", 
                        email: "dorothy@ggirl.com", 
                        password: "123456"
                    )

blanche = User.create(
                        fname: "Blanche", 
                        lname: "Devereaux", 
                        username:"Blanche", 
                        email: "blanche@ggirl.com", 
                        password: "123456"
                    )

rose = User.create(
                        fname: "Rose", 
                        lname: "Nylund", 
                        username:"Rose", 
                        email: "rose@ggirl.com", 
                        password: "123456"
                    )


# boards------------------------------------------------------------------------

pink = Board.create(
                        title: "Pink", 
                        description: "Pink!", 
                        user_id: sophia.id   
                    )

blue = Board.create(
                        title: "Blue", 
                        description: "Blue!", 
                        user_id: sophia.id   
                    ) 

gold = Board.create(
                        title: "Gold", 
                        description: "Gold!", 
                        user_id: blanche.id   
                    )

dark = Board.create(
                        title: "Black", 
                        description: "Shadow!", 
                        user_id: dorothy.id   
                    )

light = Board.create(
                        title: "Light", 
                        description: "Pastel!", 
                        user_id: rose.id   
                    )

boards = [blue, pink, gold, dark]
nums = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen"]
users = [sophia, dorothy, blanche, rose]

(0..9).each do |i| 
            
            board = light
            initial = board.title[0].downcase + i.to_s
            title = board.title + " " + nums[i]
            
            uri = "https://mypin-seeds.s3.amazonaws.com/#{initial}.jpg"
            file = URI.open(uri)
            pin = Pin.create(title: title, user_id: dorothy.id)
            pin.photo.attach(io: file, filename: '#{initial}.jpg')
            pin.save
            
            board_pin = BoardPin.new
            board_pin.board_id = board.id
            board_pin.pin_id = pin.id
            board_pin.save
            
        end
        
        dorothy.follow(demo_user)

(0..3).each do |board_i|
    (0..9).each do |i| 

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
        pin = Pin.create(title: title, user_id: demo_user.id)
        pin.photo.attach(io: file, filename: '#{initial}.jpg')
        pin.save
    
        board_pin = BoardPin.new
        board_pin.board_id = board.id
        board_pin.pin_id = pin.id
        board_pin.save
    end
end
# demo_user.follow(dorothy)

# ----------------------------------------------------------------------------
        
        
        
# ------------------------------------------------------------------------------
        
        (0..9).each do |i| 
            
            board = light
            initial = board.title[0].downcase + i.to_s
            title = board.title + " " + nums[i]
            
            uri = "https://mypin-seeds.s3.amazonaws.com/#{initial}.jpg"
            file = URI.open(uri)
            pin = Pin.create(title: title, user_id: dorothy.id)
            pin.photo.attach(io: file, filename: '#{initial}.jpg')
            pin.save
            
            board_pin = BoardPin.new
            board_pin.board_id = board.id
            board_pin.pin_id = pin.id
            board_pin.save
            
        end
        
        dorothy.follow(demo_user)