class Api::V1::StoresController < Api::V1::ApiController  
    def show
    #   @products = []
    #   all_products = @store.products
    #   all_products.each { |product|
    #     @products.push({
    #       product: product,
    #       img: url_for(product.image),
    #     })
    #   }
    render json: @store
    end
end