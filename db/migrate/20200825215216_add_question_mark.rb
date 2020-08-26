class AddQuestionMark < ActiveRecord::Migration[5.2]
  def change
    rename_column :bills, :author_paid, :author_paid?
  end
end
