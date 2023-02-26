class Api::V1::StoresController < Api::V1::ApiController  
    def show
        render json: @store
    end

    # TESTER
    def index
        # res = {}
        # Category.all.each {|category| res["#{category.name}"] = category.order_items.sum("order_items.price * order_items.quantity")}
        # render json: res

        render json: OrderItem.joins(:product, :category).group('UPPER(categories.name)').sum('order_items.quantity * price')
    end
end