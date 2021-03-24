class RemoveNullOnPins < ActiveRecord::Migration[5.2]
  def change
    change_column_null :pins, :image_url, true
  end
end
