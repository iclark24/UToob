class Api::CommentsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_comment, only: [:update, :destroy]
  before_action :set_video
  before_action :set_user, only: [:create, :update, :destroy]
  
  def index
    render json: Comment.all
  end

  # def show
  #   render json: @comment
  # end

  def create
    comment = @video.comments.new(comment_params, @user.id)
    if comment.save
      render json: comment
    else
      render json: comment.errors
    end
 end

  def update
    if @user.id == @comment.user_id
      if @comment.update(comment_params)
        render json: @comment
      else 
        render json: @comment.errors
      end
    else
      render json: @comment.errors
    end
  end


  def destroy
    if @user.id == @comment.user_id
      @comment.destroy
    else
      render json: @comment.errors
    end
  end

  private

  def set_video
    @video = Video.find(params[:video_id])
  end

  def set_comment
    @comment = comment.find(params[:id])
  end

  def comment_params
    params.require(:comment).permit(:title, :body, :video_id)
  end

  def set_user
    @user = current_user
  end

end