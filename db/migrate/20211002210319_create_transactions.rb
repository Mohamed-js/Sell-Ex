class CreateTransactions < ActiveRecord::Migration[6.1]
  def change
    create_table :transactions do |t|
      t.string :title
      t.string :notes
      t.string :transaction_type
      t.decimal :transaction_value
      t.decimal :dorg_was

      t.timestamps
    end
  end
end
