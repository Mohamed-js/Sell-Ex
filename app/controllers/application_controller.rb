class ApplicationController < ActionController::Base
  before_action :authenticate_user!, except: :stores_controller
  before_action :set_store

  def authenticate_admin!
    authenticate_user!
    unless current_user.admin
      redirect_to root_path, notice: "مش مسموحلك تخش هنا!"
    end
  end

  def set_store
    unless session[:current_store_id]
      session[:current_store_id] = Store.first.id
    end
    @current_store = Store.find session[:current_store_id]
  end
end
