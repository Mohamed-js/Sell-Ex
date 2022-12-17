class ApplicationController < ActionController::Base
    def authenticate_admin!
        authenticate_user!
        unless current_user.admin
            redirect_to root_path, notice: "مش مسموحلك تخش هنا!"
        end
    end
end
