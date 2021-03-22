class AddIndexToUserIdPins2 < ActiveRecord::Migration[5.2]
  def change
    add_index :pins, :user_id
  end
end
