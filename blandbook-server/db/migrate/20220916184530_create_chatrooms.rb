class CreateChatrooms < ActiveRecord::Migration[5.2]
  def change
    create_table :chatrooms do |t|
      t.text :title
      t.text :image
      t.integer :owner

      t.timestamps
    end
  end
end
