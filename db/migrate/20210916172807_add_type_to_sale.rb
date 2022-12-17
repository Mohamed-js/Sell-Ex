class AddTypeToSale < ActiveRecord::Migration[6.1]
  def change
    add_column :sales, :sale_type, :string
  end
end
