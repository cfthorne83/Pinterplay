class AddDescriptionToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :description, :string
    add_column :users, :image_url, :string
  end
end
