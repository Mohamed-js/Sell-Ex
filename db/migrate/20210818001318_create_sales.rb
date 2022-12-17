class CreateSales < ActiveRecord::Migration[6.1]
  def change
    create_table :sales do |t|
      t.string :name
      t.integer :buying_price
      t.integer :selling_price
      t.integer :quantity
      t.date :validity

      t.timestamps
    end
  end
end
