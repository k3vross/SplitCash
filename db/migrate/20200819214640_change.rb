class Change < ActiveRecord::Migration[5.2]
  def change
    rename_column :friends, :recepient_id, :recipient_id
  end
end
