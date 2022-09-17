class ChatroomsController < ApplicationController
  def new
  end

  def create
  end

  def index
    @chatrooms = Chatroom.all

    respond_to do |format|
      format.html
      format.json{render json: @chatrooms}
    end
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end

end
