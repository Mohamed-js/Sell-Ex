class ChangeStoreOptionsDefault < ActiveRecord::Migration[6.1]
  def change
    change_column_default :stores, :options, "{}"
  end
end
