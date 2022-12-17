class Product < ApplicationRecord
    has_many :sales
    has_many :items, dependent: :destroy

    validates :selling_price, presence: true
    validates :whole_sale_price, presence: true
end
