class UserTokenController < Knock::AuthTokenController
    # This is a controller created by knock to handle our login sessions.
    
    skip_before_action :verify_authenticity_token
end
