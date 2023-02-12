class AddImageIdToProductStoreCategory < ActiveRecord::Migration[6.1]
  def change
    add_column :stores, :image_id, :string
    add_column :categories, :image_id, :string
    add_column :products, :image_id, :string
  end
end
