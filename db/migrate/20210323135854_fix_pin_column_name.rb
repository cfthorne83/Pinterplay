class FixPinColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :pins, :body, :description
  end
end
