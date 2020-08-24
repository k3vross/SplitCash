    json.extract! @friendship, :id, :requester_id, :recipient_id
            json.requesterName @friendship.requester.username
            json.recipientName @friendship.recipient.username