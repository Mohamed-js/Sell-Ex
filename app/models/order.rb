class Order < ApplicationRecord
  has_many :order_items
  has_many :products, through: :order_items
  belongs_to :store

  def client
    Client.find_by(id: client_id) || 'No registered client'
  end
end
