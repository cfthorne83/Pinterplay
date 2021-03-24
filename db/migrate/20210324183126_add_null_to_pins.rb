class AddNullToPins < ActiveRecord::Migration[5.2]
  def change
    change_column_null :pins, :board_id, false
    change_column_null :pins, :user_id, false
    add_index :pins, :user_id
    add_index :pins, :board_id
  end
end
