class RemoveColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :friends, :confirmed
  end
end
