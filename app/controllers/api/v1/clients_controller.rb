class Api::V1::ClientsController < Api::V1::ApiController
    before_action :set_client
    def show
        render json: @client,
        only: [:first_name, :last_name, :phone, :email],
        include:{
                    :orders => {:only => [:id, :total_price, :phone, :country, :city, :address, :status_done, :created_at], :include => {:order_items => {}}},
                }
    end

    private
    def set_client
        @client = Client.find session[:client_id]
    end
end