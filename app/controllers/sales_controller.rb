class SalesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_sale, only: %i[ show edit update destroy ]

  # GET /sales or /sales.json
  def index
    this_month = Date.today.beginning_of_month
    discounts = Sale.sum(:discount)
    month_discounts = Sale.where('created_at > ?', (this_month)).sum(:discount)
    debts = Debt.sum(:dept_value)
    month_debts = Debt.where('created_at > ?', (this_month)).sum(:dept_value)

    @products_value = Item.sum(:buying_price)

    @sales = Sale.includes(:bill).order('id DESC').limit(25)
    @total_sales = @sales.sum('selling_price * quantity') - discounts - debts
    @total_profit = @total_sales - @sales.sum('buying_price * quantity') 
    @month_sales = @sales.where('sales.created_at > ?', (this_month)).sum('selling_price * quantity') - month_discounts - month_debts
    @month_profit = @month_sales - @sales.where('sales.created_at > ?', (this_month)).sum('buying_price * quantity') 
  end

  def all
    @sales = Sale.includes(:bill).order('id DESC')
  end
  

  # GET /sales/1 or /sales/1.json
  def show
  end

  # GET /sales/new
  def new
    @sale = Sale.new
    @products = Product.all.select(:name).order(:name)
  end

  # GET /sales/1/edit
  def edit
  end

  # PATCH/PUT /sales/1 or /sales/1.json
  def update
    q1 = @sale.quantity
    q2 = params[:sale]['quantity'].to_i
    q_to_return = q1 - q2
    prod = Product.find(@sale.product_id)
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
      redirect_to edit_sale_path, notice: "لم يحدث تغيير"
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
        redirect_to sales_path, notice: "أنت تحاول بيع بضاعة اكثر من التي موجودة بالمخزن"
      end
    end
  end

  # DELETE /sales/1 or /sales/1.json
  # Create Item again then destroy
  def destroy
    @sale.quantity.times do
      @item = Item.create(product_id: @sale.product.id, buying_price: @sale.buying_price)
    end

    prod = Product.find(@sale.product.id)
    prod.quantity += @sale.quantity
    prod.save

    @store = Store.first
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
      @sale = Sale.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def sale_params
      params.require(:sale).permit(:name, :buying_price, :selling_price, :quantity, :validity)
    end
end
