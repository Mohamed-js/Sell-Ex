class Store < ApplicationRecord
  has_many :bills, dependent: :destroy
  has_many :categories, dependent: :destroy
  has_many :clients, dependent: :destroy
  has_many :products, dependent: :destroy
  has_many :debts, dependent: :destroy
  has_many :sales, dependent: :destroy
  has_many :transactions, dependent: :destroy
end
