class AddSellerToBills < ActiveRecord::Migration[6.1]
  def change
    add_column :bills, :seller, :string
  end
end
