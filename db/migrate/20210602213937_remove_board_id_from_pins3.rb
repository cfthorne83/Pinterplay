class RemoveBoardIdFromPins3 < ActiveRecord::Migration[5.2]
  def change
    remove_column :pins, :board_id
  end
end
