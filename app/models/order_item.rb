class OrderItem < ApplicationRecord
  serialize :variants
  belongs_to :order
  belongs_to :store
  belongs_to :product
  has_one :category, through: :product
end
