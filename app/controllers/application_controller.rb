class ApplicationController < ActionController::Base
  before_action :authenticate_user!
  before_action :set_store


  def authenticate_admin!
    authenticate_user!

    return if current_user.admin

    redirect_to root_path, notice: 'Unauthorized..!'
  end

  def set_store
      unless session[:current_store_id]

        store = Store.first
  
        session[:current_store_id] = store.id if store
  
        redirect_to stores_path, notice: 'You have to create at least one store...!' unless store
        return
      end
  
      @current_store = Store.where(id: session[:current_store_id]).first
  
      redirect_to stores_path, notice: 'You have to create at least one store...!' unless @current_store
  
      p 'I came in set Stooooooooooooore'
  end
end
