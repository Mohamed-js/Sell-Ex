class DeleteBuyPriceFromProduct < ActiveRecord::Migration[6.1]
  def change
    remove_column :products, :buying_price
  end
end
