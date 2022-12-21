class ApplicationController < ActionController::Base
  before_action :authenticate_user!, except: :stores_controller
  before_action :set_store

  def authenticate_admin!
    authenticate_user!
    unless current_user.admin
      redirect_to root_path, notice: "Unauthorized..!"
    end
  end

  def set_store
    unless session[:current_store_id]
      store = Store.first
      session[:current_store_id] = store.id if store
      redirect_to stores_path, notice: "You have to create at least one store...!" unless store
    end
    @current_store = Store.find session[:current_store_id]
  end
end
