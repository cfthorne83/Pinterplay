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
                        image_url: "images/sophia.jpg"
                        ) 
                    
                    dorothy = User.create(
                        fname: "Dorothy", 
                        lname: "Zbornak", 
                        username:"Dorothy", 
                        email: "dorothy@ggirl.com", 
                        password: "123456",
                        image_url: "images/dorothy.jpeg"
                        )
                        
                    blanche = User.create(
                        fname: "Blanche", 
                        lname: "Devereaux", 
                        username:"Blanche", 
                        email: "blanche@ggirl.com", 
                        password: "123456",
                        image_url: "images/blanche.jpeg"
                        )
                            
                    rose = User.create(
                        fname: "Rose", 
                        lname: "Nylund", 
                        username:"Rose", 
                        email: "rose@ggirl.com", 
                        password: "123456",
                        image_url: "images/rose.jpeg"
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
                        user_id: dorothy.id   
                    )

dark = Board.create(
                        title: "Black", 
                        description: "Shadow!", 
                        user_id: blanche.id   
                    )

light = Board.create(
                        title: "Light", 
                        description: "Pastel!", 
                        user_id: rose.id   
                    )

boards = [pink, blue, gold, dark, light]
nums = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen"]
users = [sophia, dorothy, blanche, rose]

(0..4).each do |board_i|
    (0..9).each do |i| 
    # (0..1).each do |i| 

        board = boards[board_i]

        if board_i == 0 || board_i == 1
            user = sophia
        else
            user = users[board_i - 1]
        end

        if board != dark && board != light
            initial = board.title[0].downcase + i.to_s
            title = board.title + " " + nums[i]
        elsif board == dark
            initial = "d" + i.to_s
            title = "Black " + nums[i]
        elsif board == light
            initial = "l" + i.to_s
            title = "Pastel " + nums[i]
        end

        uri = "https://mypin-seeds.s3.amazonaws.com/#{initial}.jpg"
        file = URI.open(uri)
        pin = Pin.create(title: title, user_id: user.id)
        pin.photo.attach(io: file, filename: '#{initial}.jpg')
        pin.save
    
        board_pin = BoardPin.new
        board_pin.board_id = board.id
        board_pin.pin_id = pin.id
        board_pin.save
    end
end
# sophia = User.first
# dorothy = User.second
# blanche = User.third
# rose = User.last

dorothy.follow(sophia)
blanche.follow(sophia)
rose.follow(sophia)

dorothy.follow(rose)
blanche.follow(rose)

sophia.follow(dorothy)
sophia.follow(blanche)
sophia.follow(rose)