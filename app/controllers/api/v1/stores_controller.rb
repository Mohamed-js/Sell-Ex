class Api::V1::StoresController < Api::V1::ApiController  
    def show
        render json: @store, include: {:image_blob => {:only => [:key]}}
    end
end