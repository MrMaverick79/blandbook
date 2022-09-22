class PostsController < ApplicationController
  def new
    @post = Post.new
  end

  def create
    if current_user.id == params[:post][:user_id]
      @post = Post.create post_params
    end
  end

  def index
    @posts = Post.all.order("created_at DESC")
 

    # posts include user & comment
    # comments include its user
    respond_to do |format|
      format.html
      format.json{
        render json: 
        @posts, include:
        [:user, 
         :comments => {:include => :user} 
        ]}
    end

  end # index

  def show
    @post = Post.find params[:id]

    respond_to do |format|
      format.html
      format.json{
        render json: @post, include:
        [:user,
         :comments => {:include => :user}
        ]}
    end
  end # show

  def edit
    @post = Post.find params[:id]
  end

  def update
    @post = Post.find params[:id]
    @post.update post_params
  end

  def destroy
    if current_user.id == Post.find(params[:id]).user_id
      Post.destroy params[:id]
    end
  end

  def search
    keyword = params[:keyword]
    rlts_post = Post.where("title ilike ?","%#{keyword}%")
    rlts_user = User.where("screen_name ilike ?","%#{keyword}%")
    rlts = rlts_post + rlts_user
    render json: rlts
  end


  private

  def post_params
    params.require(:post).permit(:user_id, :title, :like, :dislike)
  end 


end
  