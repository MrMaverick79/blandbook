module ApplicationCable
  class Connection < ActionCable::Connection::Base
    # require 'jwt'

    # identified_by :current_user
 
  # def connect   
              
  
  #   find_verified_user
  # end
 
  #   private

  #   # ! https://itnext.io/actioncable-authentication-in-a-token-based-rails-api-f9cc4b8bf560

  # def find_verified_user  
  #   p "#############################"
  #   p  request.headers[:HTTP_SEC_WEBSOCKET_PROTOCOL].split(' ')
  #   token = request.headers[:HTTP_SEC_WEBSOCKET_PROTOCOL].split(' ').last
  #  p '######findverifieduser(), token', token
  # #         p"----ABOUT TO DECODE---"
  #         decoded_token = JWT.decode token, Rails.application.secrets.secret_key_base, true, {
  #           :algorithm => 'HS256'
  #         }
  #         p "##############decoded  ",decoded_token
  #         if User.find(decoded_token[0]["sub"])
  #           current_user
  #         else                 
  #           reject_unauthorized_connection
  #         end
  #       rescue
  #         reject_unauthorized_connection  
  #       end
    # end #end find
  end #end method
end #end class
