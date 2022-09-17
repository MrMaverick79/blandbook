class CommentsController < ApplicationController
  def new
    @comment = Comment.new
  end

  def create
    @comment = Comment.create comment_params
  end
  
  def index
    @comments = Comment.all
  
    respond_to do |format|
      format.html
      format.json{render json: @comments}
    end
  end

  def show
    @comment = Comment.find params[:id]
  end

  def edit
    @comment = Comment.find params[:id]
  end

  def update
    @comment = Comment.find params[:id]
    @comment.update comment_params

  end

  def destroy
    Comment.destroy params[:id]
    redirect_to comments_path
  end

  private

  def comment_params

    params.require(:comment).permit(:content, :like, :dislike, :user_id, :post_id)

  end


end
