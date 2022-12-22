class ProductsController < ApplicationController

  before_action :authenticate_user!

  before_action :set_product, only: %i[show edit update destroy]

  before_action :check_categories, only: %i[new index]



  # GET /products or /products.json

  def index

    @products = @current_store.products.order('name')

  end



  # GET /products/1 or /products/1.json

  def show

    @product = @current_store.products.includes(:items).find(params[:id])

  end



  # GET /products/new

  def new

    @product = Product.new

    @product.validity = Date.today.next_year

    @categories = @current_store.categories

  end



  # GET /products/1/edit

  def edit

    @categories = @current_store.categories

  end



  # POST /products or /products.json

  def create

    @store = Store.first

    @product = Product.new(product_params)

    @product.store_id = @current_store.id

    respond_to do |format|

      if @product.save

        Product.create_multible_items(params, @store, @product)

        @store.save

        format.html { redirect_to '/products/new', notice: 'Product was successfully created.' }

        format.json { render :show, status: :created, location: @product }

      else

        format.html { render :new, status: :unprocessable_entity }

        format.json { render json: @product.errors, status: :unprocessable_entity }

      end

    end

  end



  # PATCH/PUT /products/1 or /products/1.json

  def update

    respond_to do |format|

      if @product.update(product_params)

        format.html { redirect_to @product, notice: 'Product was successfully updated.' }

        format.json { render :show, status: :ok, location: @product }

      else

        format.html { render :edit, status: :unprocessable_entity }

        format.json { render json: @product.errors, status: :unprocessable_entity }

      end

    end

  end



  # DELETE /products/1 or /products/1.json

  def destroy

    @product.destroy

    respond_to do |format|

      format.html { redirect_to products_url, notice: 'Product was successfully destroyed.' }

      format.json { head :no_content }

    end

  end



  private



  # Use callbacks to share common setup or constraints between actions.

  def set_product

    @product = @current_store.products.find(params[:id])

  end



  # Only allow a list of trusted parameters through.

  def product_params

    params.require(:product).permit(:name, :selling_price, :whole_sale_price, :quantity, :validity, :image,

                                    :open_to_store, :category_id)

  end



  def check_categories

    redirect_to categories_path, notice: 'You have to create at least one category first.' if Category.count == 0

  end

end

