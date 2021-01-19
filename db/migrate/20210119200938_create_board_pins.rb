class CreateBoardPins < ActiveRecord::Migration[5.2]
  def change
    create_table :board_pins do |t|
      t.integer :board_id, null: false, index: true
      t.integer :pin_id, null: false, index: true 

      t.timestamps
    end
  end
end
