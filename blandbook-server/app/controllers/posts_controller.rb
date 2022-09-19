class PostsController < ApplicationController
  def new
    @post = Post.new
  end

  def create
    @post = Post.create post_params
  end

  def index
    @posts = Post.all
 

    respond_to do |format|
      format.html
      format.json{render json: @posts, include:[:user]}
    end
  end

  def show
    @post = Post.find params[:id]
  end

  def edit
    @post = Post.find params[:id]
  end

  def update
    @post = Post.find params[:id]
    @post.update post_params
  end

  def destroy
    Post.destroy params[:id]
  end

  private

  def post_params
    params.require(:post).permit(:user_id, :title, :like, :dislike)
  end 


end
