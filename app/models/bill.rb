class Bill < ApplicationRecord
  has_many :sales, dependent: :destroy
  has_one :debt, dependent: :destroy
  belongs_to :store

  scope :get_by_client_or_bill_id, ->(query) { where("id = ? or buyer = ?", query, query) }
end
