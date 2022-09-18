class MessagesController < ApplicationController
  
  skip_before_action :verify_authenticity_token, raise: false
  
  def new
    @message = Message.new
  end

  def create
    @message = Message.new message_params
    
    #the below is needed for the chatrooom / messaging to work
    @chatroom = Chatroom.find message_params["chatroom_id"]

    if @message.save
        ChatroomChannel.broadcast_to( @chatroom, {

          chatroom: ChatroomSerializer.new(@chatroom),
          users: UserSerializer.new(@chatroom.users),
          messages: MessageSerializer.new(@chatroom.messages)

        })
    end #end if
      render json: MessageSerializer.new(@message) 
      
      
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
    # params.permit(:headers, :body, :message, :content, :response, :like, :dislike, :user_id, :chatroom_id, :is_image, :read, :room_id)
    # For local creaion of messages:
    params.require(:message).permit(:content, :response, :like, :dislike, :user_id, :chatroom_id, :is_image, :read, :chatroom_id)

  end

end
