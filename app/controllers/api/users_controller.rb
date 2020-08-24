class Api::UsersController < ApplicationController
  
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def index
    if params[:email]
      @user = User.find_by(email: params[:email])
      render json: @user
    else
      render json: ['User not found'], status: 401
    end
  end

private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
  
end
