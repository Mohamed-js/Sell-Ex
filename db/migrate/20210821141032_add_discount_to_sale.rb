class AddDiscountToSale < ActiveRecord::Migration[6.1]
  def change
    add_column :sales, :discount, :integer, default: 0
  end
end
