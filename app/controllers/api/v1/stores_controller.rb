class Api::V1::StoresController < Api::V1::ApiController  
    def show
        render json: @store
    end
end