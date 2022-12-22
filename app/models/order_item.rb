class OrderItem < ApplicationRecord
  belongs_to :order
  belongs_to :store
  belongs_to :product
end
