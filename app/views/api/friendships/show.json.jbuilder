json.friendship do 
    json.extract! @user, :follower, :followed
end