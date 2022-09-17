class UrlsController < ApplicationController
  def new
  end

  def create
  end

  def index
    @urls = Url.all

    respond_to do |format|
      format.html
      format.json{render json: @urls}
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
