class AddUserToStore < ActiveRecord::Migration[6.1]
  def change
    add_column :stores, :user_id, :integer
    add_column :categories, :active, :boolean, default: true
    rename_column :products, :open_to_store, :active
    change_column_default :products, :active, true
  end
end
