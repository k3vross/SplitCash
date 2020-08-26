class RemoveSplitType < ActiveRecord::Migration[5.2]
  def change
    remove_column :bills, :split_type
  end
end
