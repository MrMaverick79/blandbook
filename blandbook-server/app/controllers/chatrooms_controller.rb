class ChatroomsController < ApplicationController
  
  skip_before_action :verify_authenticity_token, raise: false
  
  def new
    @chatroom = Chatroom.new
  end

  def create
    @chatroom = Chatroom.create chatroom_params
  end

  def index
    @chatrooms = Chatroom.all

    respond_to do |format|
      format.html
      format.json{render json: @chatrooms, include: [:messages, :users]} ##Might not need this one here...might be too much information!
    end
  end

  def show
    @chatroom =  Chatroom.find params[:id]

    render json: @chatroom, include: [:messages, :users]
    

  end

  def edit
    @chatroom =  Chatroom.find params[:id]
  end

  def update
    @chatroom =  Chatroom.find params[:id]
    @chatroom.update chatroom_params
  end

  def destroy
    Chatroom.destroy params[:id]
    redirect_to comments_path
  end

  private

  def chatroom_params # strong params

    params.require(:chatroom).permit(:title, :image, :owner)

  end

end
