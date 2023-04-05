class Api::V1::StoresController < Api::V1::ApiController  
    def index
        # render json: OrderItem.joins(:product, :category).group('UPPER(categories.name)').sum('order_items.quantity * price')
        render json: Store.all
    end

    def show
        render json: @store
    end
end