class OrderItem < ApplicationRecord
  belongs_to :order
  belongs_to :store
  has_one :product
end
