class ChangeColumnAuthorPaid < ActiveRecord::Migration[5.2]
  def change
    remove_column :bills, :author_paid
    add_column :bills, :author_paid, :string, null: false
  end
end