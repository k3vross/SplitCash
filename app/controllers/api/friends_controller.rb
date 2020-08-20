class Api::FriendsController < ApplicationController

    def create
        requesterId = params[:request][:requester_id]
        recipientId = params[:request][:recipient_id]
        request = Friend.new(requester_id: requesterId, recipient_id: recipientId, confirmed: false)
        if request.save
            render json: request
        else
            render json: ["User not found"], status: 401
        end

    end

    def update
        
    end

    def destroy
        request = Friend.find_by(id: params[:id])
        if request.destroy
            render json: ['Friend removed']
        else
            render json: ['Friend not found']
        end
    end
end
