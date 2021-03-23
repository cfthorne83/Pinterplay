class RemovePinColumns2 < ActiveRecord::Migration[5.2]
  def change
    remove_column :pins, :description
    remove_column :pins, :board_id
    remove_column :pins, :user_id
    remove_column :pins, :image
  end
end
