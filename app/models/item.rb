class Item < ApplicationRecord
    belongs_to :product

    validates :buying_price, presence: true
end
