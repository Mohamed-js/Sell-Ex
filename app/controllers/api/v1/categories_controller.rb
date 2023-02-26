class Api::V1::CategoriesController < Api::V1::ApiController
    protect_from_forgery
    def index
        render json: @store.categories.active
    end

    def show
        render json: @store.categories.find(params[:id]), include: {:active_products=> {}}
    end
end