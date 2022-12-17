class CreateDebts < ActiveRecord::Migration[6.1]
  def change
    create_table :debts do |t|
      t.string :debtor
      t.integer :bill_id
      t.decimal :dept_value

      t.timestamps
    end
  end
end
