class ItemsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_item, only: %i[show edit update destroy]
  before_action :check_categories, only: %i[new]

  # GET /items/new
  def new
    @item = Item.new
    @products = @current_store.products.select(:id, :name).order(:name)
  end

  # GET /items/1/edit
  def edit; end

  # POST /items or /items.json
  def create
    @store = @current_store
    prod = @current_store.products.find(params[:item]['product_id'].to_i)
    Item.create_multible(params, @store)
    @store.save
    prod.quantity += params[:item]['quantity'].to_i
    prod.save
    redirect_to new_item_path
  end

  # PATCH/PUT /items/1 or /items/1.json
  def update
    return unless @item.update(item_params)

    redirect_to @item.product
  end

  # DELETE /items/1 or /items/1.json
  def destroy
    @store = @current_store
    @product = @item.product
    @product.quantity -= 1
    @store.dorg += @item.buying_price if params[:money_back]
    if @item.destroy
      @product.save
      @store.save
    end
    respond_to do |format|
      format.html { redirect_to @product, notice: 'Item was successfully destroyed.' }
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

  def check_categories
    redirect_to categories_path, notice: 'You have to create at least one category first.' if Category.count == 0
  end
end
