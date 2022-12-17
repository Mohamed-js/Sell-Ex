class AddBillIdToSale < ActiveRecord::Migration[6.1]
  def change
    add_column :sales, :bill_id, :integer, default: 0
  end
end
