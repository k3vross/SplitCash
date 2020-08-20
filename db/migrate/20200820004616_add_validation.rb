class AddValidation < ActiveRecord::Migration[5.2]
  def change
    add_index :friends, [:requester_id, :recipient_id], unique: true
  end
end
