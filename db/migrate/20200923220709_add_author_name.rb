class AddAuthorName < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :author_name, :string, null: false
  end
end
