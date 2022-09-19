class UsersController < ApplicationController

  # authenticate the user which will ensure only logged in users are able to access these methods
  before_action :authenticate_user, except: [:create, :index]
  
  def current
    render json: current_user
  end




  def new
  end

  def create

    user = User.create(
      email: params[:email],
      screen_name: params[:screen_name],
      password: params[:password],
      avatar: params[:avatar],
      location: params[:location],
      is_admin: params[:is_admin]
    )
    
    auth_token = Knock::AuthToken.new payload: {sub: user.id}
    render json: {
      user: user,
      auth_token: auth_token
    }

  end # create

  # def create

  #   user = User.create(
  #     email: params[:email],
  #     screen_name: params[:screen_name],
  #     password: params[:password],
  #     avatar: params[:avatar],
  #     location: params[:location],
  #     is_admin: params[:is_admin]
  #   )

  #   if user.persisted?
  #     # auth_token = Knock::AuthToken.new payload: { sub: user.id }
  #     render json: user
  #   else
  #     # 'Unprocessable Entity', i.e. force an HTTP error code
  #     render json: {error: 'Could not create new user'}, status: 422
  #   end

  # end # create


  def index
    @users = User.all

    respond_to do |format|
      format.html
      format.json{render json: @users}
    end
  end # index

  def show
    # for frontend test
    user = User.last
    render json:user
  end

  def all_chat_rooms
    # for frontend test
    user = User.find params[:id]
    rooms = user.chatrooms
    render json:rooms
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
  end # user_params

  def auth_token
    if entity.respond_to? :to_token_payload
      AuthToken.new payload: entity.to_token_payload
    else
      AuthToken.new payload: {sub: entity.id}
    end

  end # auth_token

   
end # class UsersController
