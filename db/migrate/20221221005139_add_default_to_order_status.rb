class AddDefaultToOrderStatus < ActiveRecord::Migration[6.1]
  def change
    change_column_default :orders, :status_done, false
  end
end
