json.friendship do 
    json.extract! @current_user, :followers, :following
end