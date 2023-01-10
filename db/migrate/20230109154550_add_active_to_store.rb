class AddActiveToStore < ActiveRecord::Migration[6.1]
  def change
    add_column :stores, :active, :boolean, default: false
  end
end
