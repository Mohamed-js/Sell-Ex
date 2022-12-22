class AddOpenToStoreToProducs < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :open_to_store, :boolean, :default => false
    add_column :users, :name, :string
  end
end
