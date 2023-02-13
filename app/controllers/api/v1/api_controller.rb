class Api::V1::ApiController < ActionController::Base
    # include ActionController::Cookies
    # after_action :set_csrf_cookie
    before_action :set_store

    def set_store
        @store = Store.where('lower(name) = ?', params[:store].downcase).first 
        render json: {message: 'not found'} unless @store
    end

    def set_client
        @client= Client.find(session[:client_id])
        render json: {message: 'Session expired.'} unless @client    
    end

    def set_csrf_cookie
        # cookies["CSRF-TOKEN"] = {
        #   value: form_authenticity_token,
        #   secure: true,
        #   same_site: :strict,
        #   domain: 'life-lister.herokuapp.com'
        # }
    end
end