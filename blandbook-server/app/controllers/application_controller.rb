class ApplicationController < ActionController::Base
    
    #these are part of the knock-based authentication
    skip_before_action :verify_authenticity_token

    include Knock::Authenticable
  
  end

end
