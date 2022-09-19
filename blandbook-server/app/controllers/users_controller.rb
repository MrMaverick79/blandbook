class UsersController < ApplicationController

  # authenticate the user which will ensure only logged in users are able to access these methods
  before_action :authenticate_user, except: [:index, :allData]
  
  def current
    render json: current_user
  end




  def new
  end

  def create
    @user = User.create user_params
  end

  def index
    @users = User.all

    respond_to do |format|
      format.html
      format.json{render json: @users}
    end
  end

  def show
    # for frontend test
    user = User.last
    render json:user
  end

  def all_chat_rooms
    # for frontend test
    user = current_user
    
    if user.present?
      rooms = user.chatrooms
      render json:rooms
    end
end

  def edit
  end

  def update
  end

  def destroy
  end

  def allData
    @users = User.all

    respond_to do |format|
      format.html
      format.json{render json: @users, include: [:posts, :chatrooms, :comments, :messages, :urls]}
    end
  end

  private
  
  def user_params
    params.require(:user).permit(:screen_name, :email, :password, :password_confirmation, :avatar, :location, :is_admin )
  end
   
end # class UsersController
