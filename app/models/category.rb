class Category < ApplicationRecord
  has_many :products, dependent: :destroy
  has_many :active_products, -> { where(active: true) }, class_name: "Product"
  has_many :order_items, through: :products
  belongs_to :store

  scope :active, -> { where(active: true) }
end
