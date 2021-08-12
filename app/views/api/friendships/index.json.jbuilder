@follows.each do |follow|
    json.set! follow.id do 
        json.extract! follow, :id, :email, :fname, :lname, :username
    end
end