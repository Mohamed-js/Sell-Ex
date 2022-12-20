class Item < ApplicationRecord
    belongs_to :product

    validates :buying_price, presence: true

    def self.create_multible(params, store)
        params[:item]['quantity'].to_i.times do 
            Item.create(product_id: params[:item]['product_id'].to_i, buying_price: params[:item]['buying_price'])
            store.dorg -= params[:item]['buying_price'].to_i
        end
    end
end
