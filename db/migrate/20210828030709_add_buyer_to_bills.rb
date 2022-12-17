class AddBuyerToBills < ActiveRecord::Migration[6.1]
  def change
    add_column :bills, :buyer, :string
  end
end
