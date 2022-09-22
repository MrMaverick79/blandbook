class ChatroomChannel < ApplicationCable::Channel
  
   
  
  def subscribed
    puts "This is #{params}"
  
    
    # stream_from "some_channel"
    #this looks for a specific conversation that the user is 'subscribed to'
    # @chatrooom = Chatroom.find params[:room]
    # @chatrooom = Chatroom.find(6) #For testing
    
    #
    stream_for "room_#{params[:room]}"
  end

  def receive(data)
    
    ##See functions in connection 
    # @current_user = find_verified_user
    @message = Message.create content: data["content"], user_id: data["user_id"], chatroom_id: data["chatroom_id"]


    ChatroomChannel.broadcast_to("room_#{params[:room]}", @message)
    

  end

 

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end


  # def find_verified_user
  #   if current_user = User.find_by(id: cookies.signed[:user_id])
  #     puts 'Found!'
  #     current_user
  #   else 
  #     reject_unauthorised_connection
  #   end
  # end
end
