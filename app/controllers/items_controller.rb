class ItemsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_item, only: %i[ show edit update destroy ]

  # GET /items/new
  def new
    @item = Item.new
    @products = Product.all.select(:id, :name).order(:name)
  end

  # GET /items/1/edit
  def edit
  end

  # POST /items or /items.json
  def create
    @store = Store.first
    prod = Product.find(params[:item]['product_id'].to_i)
    Item.create_multible(params, @store)
    @store.save
    prod.quantity += params[:item]['quantity'].to_i
    prod.save
    redirect_to new_item_path
  end

  # PATCH/PUT /items/1 or /items/1.json
  def update
    if @item.update(item_params)
      redirect_to @item.product
    end
  end

  # DELETE /items/1 or /items/1.json
  def destroy
    @store = Store.first
    @product = @item.product
    @product.quantity -= 1
    if params[:money_back]
      @store.dorg += @item.buying_price
    end
    if @item.destroy
      @product.save
      @store.save
    end
    respond_to do |format|
      format.html { redirect_to @product, notice: "Item was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_item
      @item = Item.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def item_params
      params.require(:item).permit(:product_id, :buying_price, :quantity)
    end
end
