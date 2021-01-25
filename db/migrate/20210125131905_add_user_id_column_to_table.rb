class AddUserIdColumnToTable < ActiveRecord::Migration[5.2]
  def change
    add_index :pins, :board_id
  end
end
