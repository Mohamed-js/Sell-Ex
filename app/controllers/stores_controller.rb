class StoresController < ApplicationController
  skip_before_action :authenticate_user!
  before_action :set_store, only: %i[ destroy update edit design update_design ]
  before_action :default_store_options, only: :create

  def index
    @stores = Store.all
  end

  def new
    @store = Store.new
  end

  def edit
  end

  def create
    @store = Store.new(store_params)
    @store.options = @store_options.to_json

    image = Cloudinary::Uploader.upload(store_params[:image], 
      use_filename:true, 
      unique_filename:true,
      overwrite:true
    )
    @store.image = image['secure_url']
    @store.image_id = image['public_id']

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
    if store_params[:image]
      image = Cloudinary::Uploader.upload(store_params[:image], 
      use_filename:true, 
      unique_filename:true,
      overwrite:true)

      @store.image = image['secure_url']
      @store.image_id = image['public_id']
    end

    respond_to do |format|
      if @store.update(store_params.except(:image))
        format.html { redirect_to stores_url, notice: "Store was successfully updated." }
        format.json { render :index, status: :ok }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @store.errors, status: :unprocessable_entity }
      end
    end
  end

  def update_design
    @store.options = params[:store_options].to_json

    respond_to do |format|
      p format
      if @store.save
        format.html { render json: {success: true}, notice: "Store design was successfully updated." }
        format.json { render :index, status: :ok }
      else
        format.html { render :design, status: :unprocessable_entity }
        format.json { render json: @store.errors, status: :unprocessable_entity }
      end
    end
  end

  def control
    session[:current_store_id] = params[:id]
    s = Store.find params[:id]
    respond_to do |format|
      format.html { redirect_to stores_url, notice: "You now control #{s.name}." }
      format.json { render :index, status: :ok }
    end
  end

  def activate
    s = Store.find params[:id]
    s.active = true
    s.save
    respond_to do |format|
      format.html { redirect_to stores_url, notice: "You activated #{s.name}." }
      format.json { render :index, status: :ok }
    end
  end

  def deactivate
    s = Store.find params[:id]
    s.active = false
    s.save
    respond_to do |format|
      format.html { redirect_to stores_url, notice: "You deactivated #{s.name}." }
      format.json { render :index, status: :ok }
    end
  end

  def destroy
    Cloudinary::Uploader.destroy(@store.image_id, options = {}) if @store.image_id
    @store.destroy
    respond_to do |format|
      format.html { redirect_to stores_url, notice: "Store was successfully deleted." }
      format.json { render :index, status: :ok }
    end
  end

  def design
    
  end

  def refresher
    Net::HTTP.get(URI('https://appyrefresher.onrender.com/refresher'))
    render json: 'I\'m good!'
  end
  private

  def set_store
    @store = Store.find(params[:id])
  end

  def default_store_options
    @store_options = {
      body: {
        bg_color: '#fff',
        color: 'black'
      },
      navbar: {
        bg_color: '#fff',
        logo: {
          text: "Otaku Wear",
          text_color: "black",
          position: "center",
        },
        cart: {
          color: "#d44c0b"
        },
        links: {
          with_text: false,
          color: 'rgba(0,0,0,.7)',
          home: {
            exists: true,
            text: 'Home',
          },
          about: {
            exists: true,
            text: 'About Us',
          },
          contact: {
            exists: true,
            text: 'Contact',
          }
        }
      },
      cover: {
        height: '80vh',
        bg_color: "white",
        content_vertical_position: 'center',
        content_horizontal_position: 'start',
        headline: {
          text: "Otaku Wear",
          font_size: "4.5rem",
          color: "#d44c0b",
          bg_color: "transparent",
          text_align: "left",
        },
        description: {
          text: "The first place to think about when you are buying amazing stuff...",
          font_size: "1.5rem",
          color: "white",
          bg_color: "transparent",
          text_align: "left",
        },
        button: {
          font_size: "1rem",
          color: "#d44c0b",
          bg_color: "transparent",
          alignment: 'left',
        },
        background: {
          exists: true,
          image: "https://images6.alphacoders.com/415/415519.jpg",
          size: '100%',
          position: 'right',
          image_position: "center left",
        },
        overlay: {
          exists: true,
          color: 'rgba(23,23,23,0.75)',
        },
      },
    }
  end

  def store_params
    params.require(:store).permit(:name, :dorg, :image, :order_items)
  end
end
