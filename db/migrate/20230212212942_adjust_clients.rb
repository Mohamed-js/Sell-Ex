class AdjustClients < ActiveRecord::Migration[6.1]
  def change
    rename_column :clients, :name, :first_name
    add_column :clients, :last_name, :string
    add_column :clients, :email, :string
    add_column :clients, :phone, :string
  end
end
