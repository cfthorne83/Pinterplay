class RemoveCreatorIdColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :pins, :creator_id
  end
end
