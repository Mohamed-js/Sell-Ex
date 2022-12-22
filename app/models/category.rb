class Category < ApplicationRecord
  has_one_attached :image, dependent: :destroy
  has_many :products, dependent: :destroy
  belongs_to :store
end
