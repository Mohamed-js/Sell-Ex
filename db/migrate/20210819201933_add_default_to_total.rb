class AddDefaultToTotal < ActiveRecord::Migration[6.1]
  def change
    change_column_default :bills, :total, :default =>  0
  end
end
