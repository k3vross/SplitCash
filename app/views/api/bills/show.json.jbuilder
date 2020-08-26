json.extract! @bill, :id, :user_id, :friend_id, :description, :amount, :author_paid, :updated_at
            json.authorName @bill.author.username
            json.receiverName @bill.receiver.username
            