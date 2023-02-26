class ProductsController < ApplicationController

  before_action :authenticate_user!

  before_action :set_product, only: %i[show edit update destroy]

  before_action :check_categories, only: %i[new index]



  # GET /products or /products.json

  def index

    @products = @current_store.products.includes(:category).order('name')

  end



  # GET /products/1 or /products/1.json

  def show

    @product = @current_store.products.includes(:items).find(params[:id])

  end



  # GET /products/new

  def new
    @categories = @current_store.categories

    @variants = [
                  {name: 'color', type: 'color'},
                  {name: 'size', type: 'text'},
                ]

  end



  # GET /products/1/edit

  def edit

    @categories = @current_store.categories

  end



  # POST /products or /products.json

  def create

    @product = Product.new(product_params)

    @product.store_id = @current_store.id

    @product.variants = JSON.parse(product_params[:variants])
    @product.variants = @product.variants.deep_symbolize_keys if @product.variants.length >= 1

    image = Cloudinary::Uploader.upload(product_params[:image], 
      use_filename:true, 
      unique_filename:true,
      overwrite:true
    )

    @product.image = image['secure_url']
    @product.image_id = image['public_id']

    respond_to do |format|

      if @product.save

        @current_store.save

        format.html { redirect_to '/products/new', notice: 'Product was successfully created.' }

        format.json { render json: {message: 'ok'}, status: :created, location: @product }

      else

        format.html { render :new, status: :unprocessable_entity }

        format.json { render json: @product.errors, status: :unprocessable_entity }

      end

    end

  end



  # PATCH/PUT /products/1 or /products/1.json

  def update
    if product_params[:image]
      image = Cloudinary::Uploader.upload(product_params[:image], 
      use_filename:true, 
      unique_filename:true,
      overwrite:true)

      @product.image = image['secure_url']
      @product.image_id = image['public_id']
    end
    
    respond_to do |format|

      if @product.update(product_params.except(:image))

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

    Cloudinary::Uploader.destroy(@product.image_id, options = {}) if @product.image_id

    @product.destroy

    respond_to do |format|

      format.html { redirect_to products_url, notice: 'Product was successfully destroyed.' }

      format.json { head :no_content }

    end

  end


  def activate
    s = @current_store.products.find params[:id]
    s.active = true
    s.save
    respond_to do |format|
      format.html { redirect_to products_url, notice: "You activated #{s.name}." }
      format.json { render :index, status: :ok }
    end
  end

  def deactivate
    s = @current_store.products.find params[:id]
    s.active = false
    s.save
    respond_to do |format|
      format.html { redirect_to products_url, notice: "You deactivated #{s.name}." }
      format.json { render :index, status: :ok }
    end
  end



  private



  # Use callbacks to share common setup or constraints between actions.

  def set_product

    @product = @current_store.products.find(params[:id])

  end



  # Only allow a list of trusted parameters through.

  def product_params

    params.require(:product).permit(:name, :selling_price, :quantity, :image, :description,

                                    :open_to_store, :category_id, :variants, :discount)

  end



  def check_categories
    p @current_store
    redirect_to categories_path, notice: 'You have to create at least one category first.' if @current_store.categories.count == 0

  end

end

