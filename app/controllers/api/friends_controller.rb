class Api::FriendsController < ApplicationController

    def create
        requesterId = current_user.id
        recipient = User.find_by(email: params[:email])
        if recipient.nil?
            render json: ["User not found"], status: 401
        else
            recipientId = recipient.id
            @friendship = Friend.new(requester_id: requesterId, recipient_id: recipientId)
            if @friendship.save
                render :show
            else
                render json: ["User not found"], status: 401
            end
        end
    end

    def index
        friendIds = []
        @friendships = Friend.find(params[:requestIds])
        @friendships.each do |friendship|
            friendIds.concat([friendship.requester_id])
            friendIds.concat([friendship.recipient_id])
        end
        friendIds = friendIds.uniq
        friendIds.delete(current_user.id)
        @friends = User.find(friendIds)
        render :index
    end

    def destroy
        request = Friend.find_by(id: params[:id])
        if request.destroy
            render json: request.id
        else
            render json: ['Friend not found'], status: 401
        end
    end
end
