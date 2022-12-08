class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :image
      t.string :caption
      t.string :username
      t.integer :likes
      t.timestamps
    end
  end
end
