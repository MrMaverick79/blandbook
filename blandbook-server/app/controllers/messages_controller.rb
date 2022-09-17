class MessagesController < ApplicationController
  def new
    @message = Message.new
  end

  def create
    @message = Message.create message_params
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

    params.require(:message).permit(:content, :response, :like, :dislike, :user_id, :chatroom_id, :is_image)

  end

end
