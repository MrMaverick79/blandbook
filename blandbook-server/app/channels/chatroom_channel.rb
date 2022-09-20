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
    
  
    
    Message.create content: data["content"], user_id: data["user_id"], chatroom_id: data["chatroom_id"]


    ChatroomChannel.broadcast_to("room_#{params[:room]}", data)
    

  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
