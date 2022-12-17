class AddSellerToSales < ActiveRecord::Migration[6.1]
  def change
    add_column :sales, :seller, :string
  end
end
