class Product < ApplicationRecord
  serialize :variants
  has_many :sales
  has_many :items, dependent: :destroy
  belongs_to :category
  belongs_to :store
  has_one :order, through: :order_item, dependent: :destroy
  has_many :order_items, dependent: :destroy


  validates :selling_price, presence: true
  validates :image, presence: true
end
