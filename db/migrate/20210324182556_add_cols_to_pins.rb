class AddColsToPins < ActiveRecord::Migration[5.2]
  def change
    add_column :pins, :user_id, :integer
    add_column :pins, :board_id, :integer
    add_column :pins, :description, :text
  end
end
