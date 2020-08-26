class CreateBills < ActiveRecord::Migration[5.2]
  def change
    create_table :bills do |t|
      t.string :description, null: false
      t.integer :amount, null: false
      t.integer :user_id, null: false
      t.integer :friend_id, null: false
      t.integer :split_type, null: false
      t.timestamps
    end
  end
end
