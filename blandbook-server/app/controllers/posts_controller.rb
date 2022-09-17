class PostsController < ApplicationController
  def new
  end

  def create
  end

  def index
    @posts = Post.all

    respond_to do |format|
      format.html
      format.json{render json: @posts}
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
