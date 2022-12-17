class ChangeProductPrices < ActiveRecord::Migration[6.1]
  def change
    change_column :products, :selling_price, :decimal
    change_column :products, :whole_sale_price, :decimal
    change_column :items, :buying_price, :decimal
    change_column :sales, :selling_price, :decimal
    change_column :sales, :buying_price, :decimal
    change_column :sales, :discount, :decimal
    change_column :bills, :total, :decimal
  end
end
