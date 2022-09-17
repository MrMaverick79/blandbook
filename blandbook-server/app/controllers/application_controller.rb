class ApplicationController < ActionController::Base
    
    #these are part of the knock-based authentication
    before_action :authenticate_user

    def current
        render json: current_user

    end

end
