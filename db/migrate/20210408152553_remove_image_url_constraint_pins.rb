class RemoveImageUrlConstraintPins < ActiveRecord::Migration[5.2]
  def change
    change_column_null :pins, :image_url, false
  end
end
