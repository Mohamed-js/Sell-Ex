class Api::V1::ProductsController < Api::V1::ApiController
    protect_from_forgery
    skip_before_action :set_store, only: [:create, :show]
    def index
        render json: @store.products, only: [:id, :name, :selling_price, :image, :variants], include: {:category => {:only => [:name, :image]}, :store => { :only => [:id, :name, :image]}}
    end

    def show
        render json: Product.find(params[:id]), include: {:store => {:only => [:id, :name, :image, :options]}}
    end

    def create
        render json: Product.all,
            only: [:id, :name, :selling_price, :image, :store_id, :variants, :description],
            include:{   
                        :store => {:only => [:id, :name, :image, :options]},
                        :category => {:only => [:name]},
                    }
    end
end

# headers['Access-Control-Allow-Origin'] = '*'
# headers['Access-Control-Allow-Methods'] = 'POST, PUT, DELETE, GET, OPTIONS'
# headers['Access-Control-Request-Method'] = '*'
# headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
