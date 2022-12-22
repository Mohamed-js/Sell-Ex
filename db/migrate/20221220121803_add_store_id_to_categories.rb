class AddStoreIdToCategories < ActiveRecord::Migration[6.1]
  def change
    add_column :categories, :store_id, :integer
  end
end
