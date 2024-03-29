@following.each do |follow|
    json.set! "following" do
        json.set! follow.id do 
            json.extract! follow, :id, :email, :fname, :lname, :username, :image_url
        end
    end
end
@followers.each do |follower|
    json.set! "followers" do
        json.set! follower.id do 
            json.extract! follower, :id, :email, :fname, :lname, :username, :image_url
        end
    end
end