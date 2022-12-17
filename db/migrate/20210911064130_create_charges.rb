class CreateCharges < ActiveRecord::Migration[6.1]
  def change
    create_table :charges do |t|
      t.string :network
      t.decimal :cash
      t.decimal :profit

      t.timestamps
    end
  end
end
