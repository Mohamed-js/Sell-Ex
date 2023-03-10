class SalesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_sale, only: %i[ show edit update destroy ]

  # GET /sales or /sales.json
  def index
    @sales = @current_store.sales.includes(:bill).order("id DESC")
  end

  def dashboard
    @sales = @current_store.sales.includes(:bill, :product).order("id DESC")
    @store_order_items = @current_store.order_items
    this_month = Date.today.beginning_of_month
    last_month = (Date.today.beginning_of_month - 1).beginning_of_month
    # discounts = @current_store.sales.sum(:discount)
    # month_discounts = @current_store.sales.month_discounts(this_month)
    # debts = @current_store.debts.sum(:dept_value)
    # month_debts = @current_store.debts.month_debts(this_month)
    # @products_value = @current_store.items.sum(:buying_price)
    # @month_profit = @month_sales - @sales.where("sales.created_at > ?", (this_month)).sum("sales.buying_price * sales.quantity")
    # @total_profit = @total_sales - @sales.sum("sales.buying_price * sales.quantity")
    @total_sales = @store_order_items.sum("(price - discount) * quantity") 
    @month_sales = @store_order_items.where("created_at > ?", (this_month)).sum("(price - discount) * quantity") 
    @products_count = @current_store.products.count
    @clients_count = @current_store.clients.count
    @orders = @current_store.orders.count
    @order_items = @current_store.order_items.count
    @categories_count = @current_store.categories.count

    @stores_count = current_user.stores.count
    @active_stores_count = current_user.stores.active.count

    # Orders every day count track
    @store_orders = @current_store.orders
    @orders_chart = @store_orders.group_by_day(:created_at).count
    
    # Revenue per category
    @categories_chart = @current_store.order_items.joins(:product, :category).group('UPPER(categories.name)').sum('order_items.quantity * (price - order_items.discount)')

    # Users every day count track
    @users_chart = @current_store.clients.group_by_day(:created_at).count

    # Finished to un finished orders
    @finished_orders_chart = @store_orders.count > 0 ? @finished_orders_chart = {'Pending'=> @store_orders.pending.count, 'Complete'=> @store_orders.complete.count, 'Returned'=> @store_orders.return.count} : {}
  end

  # GET /sales/1 or /sales/1.json
  def show
  end

  # GET /sales/new
  def new
    @sale = Sale.new
    @products = @current_store.products.select(:name).order(:name)
  end

  # GET /sales/1/edit
  def edit
  end

  # PATCH/PUT /sales/1 or /sales/1.json
  def update
    q1 = @sale.quantity
    q2 = params[:sale]["quantity"].to_i
    q_to_return = q1 - q2
    prod = @current_store.products.find(@sale.product_id)
    # lower the sold quantity
    if q_to_return > 0
      q_to_return.to_i.times do
        Item.create(product_id: @sale.product_id, buying_price: @sale.buying_price)
      end
      prod.quantity += q_to_return.abs
      prod.save

      respond_to do |format|
        if @sale.update(sale_params)
          format.html { redirect_to sales_path, notice: "Sale was successfully updated." }
          format.json { render :show, status: :ok, location: @sale }
        else
          format.html { render :edit, status: :unprocessable_entity }
          format.json { render json: @sale.errors, status: :unprocessable_entity }
        end
      end
    elsif q_to_return == 0
      redirect_to edit_sale_path, notice: "Nothing changed..."
      # Higher than sold quantity >> CHeck if available in stock
    else
      if prod.quantity >= q_to_return.abs
        q_to_return.abs.times do
          prod.items.first.destroy
        end
        @sale.update(quantity: q2)
        prod.quantity -= q_to_return.abs
        prod.save
        redirect_to sales_path
      else
        redirect_to sales_path, notice: "You are trying to sell more than the stock amount..!"
      end
    end
  end

  # DELETE /sales/1 or /sales/1.json
  # Create Item again then destroy
  def destroy
    @sale.quantity.times do
      @item = Item.create(product_id: @sale.product.id, buying_price: @sale.buying_price)
    end

    prod = @current_store.products.find(@sale.product.id)
    prod.quantity += @sale.quantity
    prod.save

    @store = @current_store
    @store.dorg -= @sale.quantity * @sale.selling_price - @sale.discount
    @store.save

    @sale.destroy
    respond_to do |format|
      format.html { redirect_to sales_path, notice: "Sale was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_sale
    @sale = @current_store.sales.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def sale_params
    params.require(:sale).permit(:name, :buying_price, :selling_price, :quantity, :validity)
  end
end
