class ChatroomChannel < ApplicationCable::Channel
  
  include Knock::Authenticable
   
  
  def subscribed
    puts "This is #{params["token"]}"
  
    
    # stream_from "some_channel"
    #this looks for a specific conversation that the user is 'subscribed to'
    # @chatrooom = Chatroom.find params[:room]
    # @chatrooom = Chatroom.find(6) #For testing
    
    stream_for "room_#{params[:room]}"
    
  end

  def receive(data)
     p "##################"
    
    verify_user= find_verified_user(data["token"])

    ##See functions in connection 
    # @current_user = find_verified_user
    @message = Message.create content: data["content"], user_id: verify_user.id, chatroom_id: data["chatroom_id"]


    ChatroomChannel.broadcast_to("room_#{params[:room]}", @message)
    

  end

 

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def find_verified_user token  
       
  #   p '######findverifieduser(), token', token
          
    p"----ABOUT TO DECODE---"
    decoded_token = JWT.decode token, Rails.application.secrets.secret_key_base, true, {
            :algorithm => 'HS256'
    }
    p "##############decoded  ",decoded_token
      # if User.find(decoded_token[0]["sub"])
      # p "------------------"
      # p User.find(decoded_token[0]["sub"])
      # p"----------WOWOWOWOW--------------"
      # p current_user
      if User.find(decoded_token[0]["sub"]) === current_user
        p "* * * * * * *"
        verify_user
      end
  #         @current_user
  #   else                 
  #   reject_unauthorized_connection
  end #end FVU
         
        
  # end


  
end
