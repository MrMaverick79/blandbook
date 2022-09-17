class ChatroomChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    #this looks for a specific conversation that the user is 'subscribed to'
    chatrooom = Chatroom.find(params[:id])
    stream_for chatrooom
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
