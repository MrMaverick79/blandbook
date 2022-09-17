class CreateUrls < ActiveRecord::Migration[5.2]
  def change
    create_table :urls do |t|
      t.text :url
      t.boolean :public
      t.integer :post_id

      t.timestamps
    end
  end
end
