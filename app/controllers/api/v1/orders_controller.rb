class Api::V1::OrdersController < Api::V1::ApiController
    skip_before_action :verify_authenticity_token

    def index

    end

    def create
        @order = Order.new(name: "#{params[:first_name]} #{params[:last_name]}", client_id: @client && @client.id, phone: params[:phone], country: params[:country], city: params[:city], address: params[:address], store_id: @store.id, items_count: 0, total_price: 0)
    
        params[:order_items].each do |order_item|
          product = Product.find_by(id: order_item[:product_id])

          if product
            variants = JSON.parse order_item[:variants]

            @order.order_items.build(store_id: @store.id, product_id: order_item[:product_id], quantity: order_item[:quantity], price: product.selling_price, variants: variants)
            @order.items_count += order_item[:quantity].to_i
            @order.total_price += product.selling_price * order_item[:quantity].to_i
          end
        end

        if @order.save
          render json: {message: "Order created."}, status: :created
        else
          render json: {errors: @order.errors.full_messages}
        end
    end

    private
    def set_client
        @client = Client.find session[:client_id]
    end

    def order_params
      params.require(:order).permit(:name)
    end
end