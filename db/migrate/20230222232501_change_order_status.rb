class ChangeOrderStatus < ActiveRecord::Migration[6.1]
  def change
    rename_column :orders, :status_done, :status
    change_column :orders, :status, :string
    change_column_default :orders, :status, "pending"
  end
end
