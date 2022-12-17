class HomeController < ApplicationController
    before_action :authenticate_user!
    before_action :authenticate_admin!, except: [:index]
    def index; end
    # NEW OR EXIST MENU
    def new; end
    # ADD TO EXIST
    def create; end
end