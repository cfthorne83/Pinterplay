class CreatePins < ActiveRecord::Migration[5.2]
  def change
    create_table :pins do |t|
      t.string :title, null: false, index: true
      t.string :body
      t.integer :creator_id, null: false, index: true

      t.timestamps
    end
  end
end
