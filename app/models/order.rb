class Order < ApplicationRecord
  has_many :order_items, dependent: :destroy
  has_many :products, through: :order_items
  belongs_to :store

  scope :pending, -> { where(status: "pending") }
  scope :complete, -> { where(status: "complete") }

  def client
    Client.find_by(id: client_id) || 'No registered client'
  end
end
