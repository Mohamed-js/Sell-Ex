class Api::V1::SearchController < Api::V1::ApiController
    def index
        headers['Access-Control-Allow-Origin'] = '*'
        headers['Access-Control-Allow-Methods'] = 'POST, PUT, DELETE, GET, OPTIONS'
        headers['Access-Control-Request-Method'] = '*'
        headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
        q = ActiveRecord::Base::sanitize_sql(params[:q])

        render json: @store.products.where("LOWER(CONCAT(name, description)) LIKE ?", "%#{q}%".downcase), except: [:category_id, :quantity, :image_id], status: :ok
    end
end