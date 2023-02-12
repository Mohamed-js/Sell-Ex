class AddVariantsToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :variants, :text
  end
end
