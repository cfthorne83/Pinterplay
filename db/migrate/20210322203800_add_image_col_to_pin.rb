class AddImageColToPin < ActiveRecord::Migration[5.2]
  def change
    add_column :pins, :image, :string
  end
end
