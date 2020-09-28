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

    def show
        @bill = Bill.find_by(id: params[:id])
        render :show
    end

    def update
        @bill = Bill.find_by(id: params[:id])
        if @bill.update(bill_params)
            render :show
        else
            render json: @bill.errors.full_messages, status: 402
        end
    end

    def destroy
        bill = Bill.find_by(id: params[:id])
        if bill.destroy
            render json: bill.id
        else
            render json: ['Bill not found'], status: 401
        end
    end

    private
    def bill_params
        params.require(:bill).permit(:description, :amount, :user_id, :friend_id, :author_paid)
    end
end
