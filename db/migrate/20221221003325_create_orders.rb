class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.integer :store_id
      t.integer :client_id
      t.integer :product_id
      t.decimal :total_price
      t.integer :items_count
      t.string :phone
      t.string :country
      t.string :city
      t.text :address
      t.boolean :status_done

      t.timestamps
    end
  end
end
