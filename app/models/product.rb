class Product < ApplicationRecord
  has_one_attached :image, dependent: :destroy
  has_many :sales
  has_many :items, dependent: :destroy
  belongs_to :category
  belongs_to :store
  has_one :order, through: :order_item
  has_many :order_items

  validates :selling_price, presence: true
  validates :whole_sale_price, presence: true

  def self.create_multible_items(params, store, product)
    params[:product]["quantity"].to_i.times do
      Item.create(product_id: product.id, buying_price: params[:product]["buying_price"])
      store.dorg -= params[:product]["buying_price"].to_i
    end
  end
end
