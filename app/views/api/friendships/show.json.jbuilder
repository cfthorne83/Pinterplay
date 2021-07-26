json.friendship do 
    debugger
    json.extract! @current_user, :follower, :followed
    # json.
end