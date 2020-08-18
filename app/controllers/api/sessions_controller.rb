class Api::SessionsController < ApplicationController

   def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user.nil?
      render json: ['Invalid credentials. Please try again'], status: 401
    else
      login!(@user)
      render json: @user
    end
  end

  def destroy
    if current_user
      logout!
      render json: {}
    else
      render json: ['There is no current user'], status: 404
    end
  end

end
