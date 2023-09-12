class Api::V1::SearchController < Api::V1::ApiController
    def index
        q = ActiveRecord::Base::sanitize_sql(params[:q])

        render json: @store.products.active.where("LOWER(CONCAT(name, description)) LIKE ?", "%#{q}%".downcase),
        except: [:category_id, :quantity, :image_id],
        include:{ :category => {:only => [:name]} }, status: :ok
    end
end