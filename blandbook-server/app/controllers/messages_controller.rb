class MessagesController < ApplicationController
  def new
    @message = Message.new
  end

  def create
    @message = Message.create message_params
    
    #the below is needed for the chatrooom / messaging to work
    @chatroom Chatroom.find(@message[:chatroom_id])

    ChatroomChannel.broadcast_to(@channel, @message)
      render json: @message
  end

  def index
    @messages = Message.all

    respond_to do |format|
      format.html
      format.json{render json: @messages}
    end
  end

  def show
    @message = Message.find params[:id]

    respond_to do |format|
      format.html
      format.json{render json: @message} #add an includes: here???
  end

  def edit
    @message = Message.find params[:id]
    
  end

  def update
    @message = Message.find params[:id]
    @message.update message_params
    
  end

  def destroy
    Message.destroy params[:id]
    redirect_to messages_path
  end

  private

  def message_params

    #there are some extra params in here to facilitate the chat function
    params.require(:message).permit(:content, :response, :like, :dislike, :user_id, :chatroom_id, :is_image, :read)

  end

end
