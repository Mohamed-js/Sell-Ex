class ApplicationController < ActionController::Base
    # before_action :configure_permitted_parameters, if: :devise_controller?
    before_action :authenticate_user!, except: :stores_controller
    def authenticate_admin!
        authenticate_user!
        unless current_user.admin
            redirect_to root_path, notice: "مش مسموحلك تخش هنا!"
        end
    end
end
