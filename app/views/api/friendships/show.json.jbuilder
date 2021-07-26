json.friendship do 
    # debugger
    json.extract! @current_user, :followers, :following
    # json.
end