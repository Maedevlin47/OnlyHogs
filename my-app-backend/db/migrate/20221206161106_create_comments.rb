class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :comment
      t.string :username
      t.integer :user_id
      t.integer :post_id
      t.timestamps
    end
  end
end N  N 

    



     N 
 N 

    


    




