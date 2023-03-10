class CategoriesController < ApplicationController
  before_action :set_category, only: %i[ show edit update destroy ]

  # GET /categories or /categories.json
  def index
    @categories = @current_store.categories
  end

  # GET /categories/1 or /categories/1.json
  def show
    @products = @category.products
  end

  # GET /categories/new
  def new
    @category = Category.new
  end

  # GET /categories/1/edit
  def edit
  end

  # POST /categories or /categories.json
  def create
    @category = Category.new(category_params)
    @category.store_id = @current_store.id

    image = Cloudinary::Uploader.upload(category_params[:image], 
      use_filename:true, 
      unique_filename:true,
      overwrite:true
    )

    @category.image = image['secure_url']
    @category.image_id = image['public_id']
    respond_to do |format|
      if @category.save
        format.html { redirect_to categories_url, notice: "Category was successfully created." }
        format.json { render :index, status: :created }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @category.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /categories/1 or /categories/1.json
  def update
    if category_params[:image]
      image = Cloudinary::Uploader.upload(category_params[:image], 
      use_filename:true, 
      unique_filename:true,
      overwrite:true)

      @category.image = image['secure_url']
      @category.image_id = image['public_id']
    end
    respond_to do |format|
      if @category.update(category_params.except(:image))
        format.html { redirect_to categories_url(@category), notice: "Category was successfully updated." }
        format.json { render :show, status: :ok, location: @category }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @category.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /categories/1 or /categories/1.json
  def destroy
    Cloudinary::Uploader.destroy(@category.image_id, options = {}) if @category.image_id
    @category.destroy

    respond_to do |format|
      format.html { redirect_to categories_url, notice: "Category was successfully destroyed." }
      format.json { head :no_content }
    end
  end


  def activate
    s = @current_store.categories.find params[:id]
    s.active = true
    s.save
    respond_to do |format|
      format.html { redirect_to categories_url, notice: "You activated #{s.name}." }
      format.json { render :index, status: :ok }
    end
  end

  def deactivate
    s = @current_store.categories.find params[:id]
    s.active = false
    s.save
    respond_to do |format|
      format.html { redirect_to categories_url, notice: "You deactivated #{s.name}." }
      format.json { render :index, status: :ok }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_category
    @category = @current_store.categories.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def category_params
    params.require(:category).permit(:name, :image)
  end
end
