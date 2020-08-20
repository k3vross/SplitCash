class UpdateFriends < ActiveRecord::Migration[5.2]
  def change
    rename_column :friends, :user_id, :requester_id
    rename_column :friends, :friend_id, :recepient_id
  end
end
