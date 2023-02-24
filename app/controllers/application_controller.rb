class ApplicationController < ActionController::Base
  before_action :authenticate_user!
  before_action :set_store, unless: ->(controller) { controller.controller_name == 'sessions' || controller.controller_name == 'registrations' }


  def set_store
    p 'Stoooring'
      if current_user
        p 'There is user'
        p current_user
        unless session[:current_store_id]
          p 'There is no store session'
          store = current_user.stores.first
          session[:current_store_id] = store.id if store
          @current_store =  store if store
          redirect_to stores_path, notice: 'You have to create at least one store...!' unless store
          return
        end
        p 'There is store session'
        @current_store = current_user.stores.where(id: session[:current_store_id]).first
        redirect_to stores_path, notice: 'You have to create at least one store...!' unless @current_store
        return
      end
      
      redirect_to new_user_session_path, notice: 'Please login at first...!'
  end
end
