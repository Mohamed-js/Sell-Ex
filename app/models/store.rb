class Store < ApplicationRecord
  has_many :bills, dependent: :destroy
  has_many :categories, dependent: :destroy
  has_many :clients, dependent: :destroy
  has_many :products, dependent: :destroy
  has_many :debts, dependent: :destroy
  has_many :sales, dependent: :destroy
  has_many :transactions, dependent: :destroy
  has_many :items, through: :products, dependent: :destroy
  has_many :orders, dependent: :destroy
  has_many :order_items, dependent: :destroy  
  has_many :active_products, -> { where(open_to_store: true) }, class_name: "Product" 
end
