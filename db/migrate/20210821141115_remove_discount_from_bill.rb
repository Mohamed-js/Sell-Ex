class RemoveDiscountFromBill < ActiveRecord::Migration[6.1]
  def change
    remove_column :bills, :discount
  end
end
