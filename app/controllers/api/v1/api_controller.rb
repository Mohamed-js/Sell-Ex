class Api::V1::ApiController < ActionController::Base
    before_action :set_store

    def set_store
        @store = Store.where('lower(name) = ?', params[:store].downcase).first 
        render 'layouts/404' unless @store && @store.active
    end
end