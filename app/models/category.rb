class Category < ApplicationRecord
  has_many :products, dependent: :destroy
  has_many :order_items, through: :products
  belongs_to :store
end
