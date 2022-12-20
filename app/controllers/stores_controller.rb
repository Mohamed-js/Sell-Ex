class StoresController < ApplicationController
  skip_before_action :authenticate_user!
  def index
    @products = []
    @all_products = Product.all
    @all_products.each{|product| @products.push({
      product: product,
      img: url_for(product.image)
    })}
    @store = Store.first
  end
end
