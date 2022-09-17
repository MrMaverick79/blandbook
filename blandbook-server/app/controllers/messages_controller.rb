class MessagesController < ApplicationController
  def new
  end

  def create
  end

  def index
    @messages = Message.all

    respond_to do |format|
      format.html
      format.json{render json: @messages}
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
