class Api::V1::StoresController < Api::V1::ApiController
    skip_before_action :set_store, only: :index  
    def index
        # render json: OrderItem.joins(:product, :category).group('UPPER(categories.name)').sum('order_items.quantity * price')
        render json: Store.all
    end

    def show
        render json: @store
    end
end
