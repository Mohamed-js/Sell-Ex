class AddDescriptionToProduct < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :description, :string
    remove_column :products, :whole_sale_price
    remove_column :products, :validity
  end
end
