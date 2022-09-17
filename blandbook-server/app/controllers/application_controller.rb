class ApplicationController < ActionController::Base
    
    #these are part of the knock-based authentication
    skip_before_action :verify_authenticity_token

    include Knock::Authenticable

    def current
        render json: current_user

    end

end
