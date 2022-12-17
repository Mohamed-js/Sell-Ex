class Sale < ApplicationRecord
    belongs_to :bill
    belongs_to :product

    validates :selling_price, presence: true
    validates :buying_price, presence: true
    validates :name, presence: true
    validates :quantity, presence: true
end
