class AddStoreIdToModels < ActiveRecord::Migration[6.1]
  def change
    add_column :bills, :store_id, :integer
    add_column :clients, :store_id, :integer
    add_column :debts, :store_id, :integer
    add_column :products, :store_id, :integer
    add_column :sales, :store_id, :integer
    add_column :transactions, :store_id, :integer
  end
end
