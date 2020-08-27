class Api::BillsController < ApplicationController

    def create
        author_id = current_user.id
        receiver_id = params[:bill][:user_id]
        @bill = Bill.new(
            user_id: author_id,
            friend_id: receiver_id,
            description: params[:bill][:description],
            amount: ((params[:bill][:amount].to_f * 100).to_i),
            author_paid: params[:bill][:author_paid]
        )
        debugger
        if @bill.save
            render :show
        else
            render json: @bill.errors.full_messages, status: 401
        end
    end

    def index
        user = current_user
        @bills = user.bills_created + user.bills_received
        render :index
    end

    def update

    end

    def destroy
        bill = Bill.find_by(id: params[:id])
        if bill.destroy
            render json: bill.id
        else
            render json: ['Bill not found'], status: 401
        end
    end

end
