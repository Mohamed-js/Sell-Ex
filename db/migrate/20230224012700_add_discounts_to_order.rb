class AddDiscountsToOrder < ActiveRecord::Migration[6.1]
  def change
    add_column :orders, :discount, :decimal, default: 0
    add_column :order_items, :discount, :decimal, default: 0
  end
end
