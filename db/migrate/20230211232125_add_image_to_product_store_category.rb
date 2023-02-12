class AddImageToProductStoreCategory < ActiveRecord::Migration[6.1]
  def change
    add_column :stores, :image, :text
    add_column :categories, :image, :text
    add_column :products, :image, :text
  end
end
