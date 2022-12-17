class ChargesController < ApplicationController
    before_action :authenticate_user!
    def index
        @charges = Charge.all
    end

    def show
        @charges = Charge.where(network: params[:id])
    end
    

    def new
        @charge = Charge.new
    end
    
    def create
        @charge = Charge.new(charge_params)
        if @charge.save
            redirect_to charges_path
        else
            render :new, status: :unprocessable_entity
        end
    end

    private 
    def charge_params
        params.require(:charge).permit(:network, :cash, :profit)
    end
end