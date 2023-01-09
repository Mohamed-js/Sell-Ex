class StoresController < ApplicationController
  skip_before_action :authenticate_user!
  before_action :set_store, only: %i[show destroy update edit]

  def index
    @stores = Store.all
  end

  def show
    @products = []
    @store_opts = {
      body: {
        bg_color: '#fff',
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
        height: '70vh',
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
          color: '#171717bd',
        },
      },
    }
    all_products = @store.products
    all_products.each { |product|
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
