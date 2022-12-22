class OrdersController < ApplicationController
  before_action :set_order, only: %i[ show update destroy ]
  skip_before_action :authenticate_user!
  skip_before_action :verify_authenticity_token
  skip_before_action :set_store

  # GET /orders or /orders.json
  def index
    @orders = Order.includes(:order_items)
  end

  # GET /orders/1 or /orders/1.json
  def show
  end

  # POST /orders or /orders.json
  def create
    @order = Order.new(name: params[:name], phone: params[:phone], country: params[:country], city: params[:city], address: params[:address], store_id: params[:store_id], items_count: 0, total_price: 0)

    params[:order_items].each do |order_item|
      product = Product.find(order_item[:product_id])
      @order.order_items.build(store_id: params[:store_id], product_id: order_item[:product_id], quantity: order_item[:quantity], price: product.selling_price, size: order_item[:size], color: order_item[:color])
      @order.items_count += order_item[:quantity].to_i
      @order.total_price += product.selling_price * order_item[:quantity].to_i
    end
    
    if @order.save
      render json: "Order created."
    else
      render json: {errors: @order.errors.full_messages}
    end
  end

  # PATCH/PUT /orders/1 or /orders/1.json
  def update
    respond_to do |format|
      if @order.update(order_params)
        format.html { redirect_to order_url(@order), notice: "Order was successfully updated." }
        format.json { render :show, status: :ok, location: @order }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @order.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /orders/1 or /orders/1.json
  def destroy
    @order.destroy

    respond_to do |format|
      format.html { redirect_to orders_url, notice: "Order was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_order
    @order = Order.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def order_params
    params.require(:order).permit(:order_items, :store_id, :client_id, :phone, :country, :city, :address, :name)
  end
end
