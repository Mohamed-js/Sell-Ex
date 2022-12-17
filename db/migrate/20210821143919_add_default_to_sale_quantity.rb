class AddDefaultToSaleQuantity < ActiveRecord::Migration[6.1]
  def change
    change_column :sales, :quantity, :integer, :default => 0
  end
end
