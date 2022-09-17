class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email
      t.string :screen_name
      t.text :password_digest
      t.text :avatar
      t.text :location
      t.boolean :is_admin

      t.timestamps
    end
  end
end
