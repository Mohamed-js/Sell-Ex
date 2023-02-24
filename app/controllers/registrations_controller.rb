class RegistrationsController < Devise::RegistrationsController
    skip_before_action :set_store
end