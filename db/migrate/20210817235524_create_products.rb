class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.integer :buying_price
      t.integer :selling_price
      t.integer :whole_sale_price
      t.integer :quantity
      t.date :validity

      t.timestamps
    end
  end
end
