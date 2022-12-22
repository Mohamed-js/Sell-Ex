class Sale < ApplicationRecord
  belongs_to :bill
  belongs_to :product
  belongs_to :store

  validates :selling_price, presence: true
  validates :buying_price, presence: true
  validates :name, presence: true
  validates :quantity, presence: true

  scope :month_discounts, ->(this_month) { where("created_at > ?", (this_month)).sum(:discount) }
end
