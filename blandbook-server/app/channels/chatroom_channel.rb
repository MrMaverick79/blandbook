class ChatroomChannel < ApplicationCable::Channel
  def subscribed
    
    # stream_from "some_channel"
    #this looks for a specific conversation that the user is 'subscribed to'
    # @chatrooom = Chatroom.find params[:id] <--this 
    @chatrooom = Chatroom.find(6) #For testing
    stream_for @chatrooom
  end

  def received(data)
    ChatroomChannel.broadcast_to(@chatroom, {chatroom: @chatroom, users: @chatroom.users, messages: @chatroom.messages })
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
