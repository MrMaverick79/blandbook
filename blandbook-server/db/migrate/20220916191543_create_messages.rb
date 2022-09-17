class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.text :content
      t.text :response
      t.integer :like
      t.integer :dislike
      t.integer :user_id
      t.integer :chatroom_id
      t.boolean :is_image

      t.timestamps
    end
  end
end
