class AddVariantsToOrderItems < ActiveRecord::Migration[6.1]
  def change
    remove_column :order_items, :color
    remove_column :order_items, :size
    add_column :order_items, :variants, :text
  end
end
