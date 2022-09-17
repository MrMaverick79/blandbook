class CreateChatroomsUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :chatrooms_users do |t|
      t.integer :chatroom_id
      t.integer :user_id
    end
  end
end
