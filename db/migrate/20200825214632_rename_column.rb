class RenameColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :bills, :current_user_paid?, :author_paid
  end
end
