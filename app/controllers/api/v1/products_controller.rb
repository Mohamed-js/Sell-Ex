class Api::V1::ProductsController < Api::V1::ApiController
    protect_from_forgery
    skip_before_action :set_store, only: [:create, :show]
    def index
        render json: @store.products.active, only: [:id, :name, :selling_price, :discount, :image, :variants], include: {:category => {:only => [:name, :image]}, :store => { :only => [:id, :name, :image]}}
    end

    def with_discount
        render json: @store.products.with_discount, only: [:id, :name, :selling_price, :discount, :image, :variants], include: {:category => {:only => [:name, :image]}, :store => { :only => [:id, :name, :image]}}
    end

    # Next building
    def show
        render json: Product.find(params[:id]), include: {:store => {:only => [:id, :name, :image, :options]}}
    end

    def create
        render json: Product.all.active,
            only: [:id, :name, :selling_price, :discount, :image, :store_id, :variants, :description],
            include:{   
                        :store => {:only => [:id, :name, :image, :options]},
                        :category => {:only => [:name]},
                    }
    end
end