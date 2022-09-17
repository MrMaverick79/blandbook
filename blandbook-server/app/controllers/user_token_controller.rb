class UserTokenController < Knock::AuthTokenController
    skip_before_action :verify_authenticaiton_token

end
