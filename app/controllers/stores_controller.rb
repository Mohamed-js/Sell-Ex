class StoresController < ApplicationController
  skip_before_action :authenticate_user!
  before_action :set_store, only: %i[show destroy update edit]

  def index
    @stores = Store.all
  end

  def show
    @products = []
    @all_products = @store.products
    @all_products.each { |product|
      @products.push({
        product: product,
        img: url_for(product.image),
      })
    }
  end

  def new
    @store = Store.new
  end

  def edit
  end

  def create
    @store = Store.new(store_params)

    respond_to do |format|
      if @store.save
        format.html { redirect_to stores_url, notice: "Store was successfully created." }
        format.json { render :index, status: :ok }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @store.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @store.update(store_params)
        format.html { redirect_to stores_url, notice: "Store was successfully updated." }
        format.json { render :index, status: :ok }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @store.errors, status: :unprocessable_entity }
      end
    end
  end

  def activate
    session[:current_store_id] = params[:id]
    respond_to do |format|
      format.html { redirect_to stores_url, notice: "Store was successfully activated." }
      format.json { render :index, status: :ok }
    end
  end

  def destroy
    @store.destroy
    respond_to do |format|
      format.html { redirect_to stores_url, notice: "Store was successfully deleted." }
      format.json { render :index, status: :ok }
    end
  end

  private

  def set_store
    @store = Store.find(params[:id])
  end

  def store_params
    params.require(:store).permit(:name, :dorg, :image, :order_items)
  end
end
