class DeleteProductIdFromOrders < ActiveRecord::Migration[6.1]
  def change
    remove_column :orders, :product_id
    drop_table :charges
  end
end
