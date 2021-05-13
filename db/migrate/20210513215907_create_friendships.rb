class CreateFriendships < ActiveRecord::Migration[5.2]
  def change
    create_table :friendships do |t|
      t.integer :follower_id, index: true
      t.integer :followed_id, index: true

      t.timestamps
    end

    add_index :friendships, [ :follower_id, :followed_id], unique: true 
  end
end
