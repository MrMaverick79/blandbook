class CommentsController < ApplicationController
  def new
  end

  def create
  end
  
  def index
    @comments = Comment.all
  
    respond_to do |format|
      format.html
      format.json{render json: @comments}
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
