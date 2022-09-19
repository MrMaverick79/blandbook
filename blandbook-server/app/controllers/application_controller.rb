class ApplicationController < ActionController::Base
    
    # these are part of the knock-based authentication
    # This adds the Knock authenticator into your controllers 
    # and also skips the authenticity error you'd otherwise be getting.
    skip_before_action :verify_authenticity_token

    include Knock::Authenticable
  

    before_action :fetch_user

    def fetch_user

      if session[:user_id].present?
        @current_user = User.find_by id:session[:user_id]
      end # login check

      unless @current_user.present?
        session[:user_id] = nil
      end

    end # fetch_user


    def check_if_logged_in

      if !@current_user.present?
        flash[:error] = 'You must be logged in to perform that action'
        redirect_to login_path
      end

    end # check_if_logged_in
  

end #class ApplicationController
