class AddOptionsToStores < ActiveRecord::Migration[6.1]
  def change
    add_column :stores, :options, :text
  end
end
