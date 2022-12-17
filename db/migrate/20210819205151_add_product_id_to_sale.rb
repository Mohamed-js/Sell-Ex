class AddProductIdToSale < ActiveRecord::Migration[6.1]
  def change
    add_column :sales, :product_id, :integer
  end
end
