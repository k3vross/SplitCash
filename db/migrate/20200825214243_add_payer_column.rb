class AddPayerColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :bills, :current_user_paid?, :boolean, null: false
  end
end
