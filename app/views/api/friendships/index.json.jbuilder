@follows.each do |follow|
    json.set! follow.id do 
        json.extract! follow, :follower_id, :followed_id
    end
end