class CreateApiBoardPins < ActiveRecord::Migration[5.2]
  def change
    create_table :api_board_pins do |t|

      t.timestamps
    end
  end
end
