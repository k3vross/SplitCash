@bills.each do |bill|
    json.set! bill.id do
        json.extract! bill, :id, :user_id, :friend_id, :description, :amount, :author_paid, :created_at, :updated_at
        json.authorName bill.author.username
        json.receiverName bill.receiver.username
    end
end
