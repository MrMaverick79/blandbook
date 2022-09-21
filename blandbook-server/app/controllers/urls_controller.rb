class UrlsController < ApplicationController
  def new
    @url = Url.new
  end

  def create
    @url = Url.create url_params
  
  end

  def index
    @urls = Url.all

    respond_to do |format|
      format.html
      format.json{render json: @urls}
    end
  end

  def show
    @url = Url.find params[:id]
  end

  def edit
    @url = Url.find params[:id]
  end

  def update
    @url = Url.find params[:id]
    @url.update url_params

  end

 

  def destroy
    Url.destroy params[:id]
  end

  private

  def url_params
    params.require(:url).permit(:url, :public, :post_id)
  end

end
