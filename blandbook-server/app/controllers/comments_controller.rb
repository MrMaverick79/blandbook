class CommentsController < ApplicationController
  
  before_action :authenticate_user, except: [:index]
  
  
  def new
    @comment = Comment.new
  end

  def create
    comment = Comment.create(
      content: params[:content],
      like: params[:like],
      dislike: params[:dislike],
      # user_id: params[:user_id],
      user_id: current_user.id,
      post_id: params[:post_id]
    )

    if comment.persisted?
      render json: comment
    else
      render json: {error:'Could not create new comment'}, status: 422
    end


  end # create
  
  def index
    @comments = Comment.all.order("created_at ASC")
  
    respond_to do |format|
      format.html
      format.json{render json: @comments, include:[:user]}
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
    # redirect_to comments_path
  end

  private

  def comment_params

    params.require(:comment).permit(:content, :like, :dislike, :user_id, :post_id)

  end


end
