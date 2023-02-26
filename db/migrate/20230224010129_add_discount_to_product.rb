class AddDiscountToProduct < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :discount, :decimal, default: 0
  end
end
