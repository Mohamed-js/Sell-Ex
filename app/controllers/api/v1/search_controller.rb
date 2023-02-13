class Api::V1::SearchController < Api::V1::ApiController
    def index
        q = ActiveRecord::Base::sanitize_sql(params[:q])

        render json: @store.products.where("LOWER(CONCAT(name, description)) LIKE ?", "%#{q}%".downcase)
    end
end