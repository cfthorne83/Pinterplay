class RemoveBoardIdNullFromPins2 < ActiveRecord::Migration[5.2]
  def change
        change_column_null :pins, :board_id, true
  end
end
