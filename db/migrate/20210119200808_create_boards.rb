class CreateBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :boards do |t|
      t.string :title, null: false, index: true 
      t.integer :user_id, null: false, index: true 

      t.timestamps
    end
  end
end
