json.friendships do 
    @friendships.each do |friendship|
        json.set! friendship.id do
            json.extract! friendship, :id, :requester_id, :recipient_id, :confirmed
            json.requesterName friendship.requester.username
            json.recipientName friendship.recipient.username
        end
    end
end

json.users do 
    @friends.each do |friend|
        json.set! friend.id do
            json.extract! friend, :id, :username, :email
        end
    end
end