class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :content
      t.integer :like
      t.integer :dislike
      t.integer :user_id
      t.integer :post_id

      t.timestamps
    end
  end
end
