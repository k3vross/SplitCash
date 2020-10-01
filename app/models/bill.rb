# == Schema Information
#
# Table name: bills
#
#  id          :bigint           not null, primary key
#  description :string           not null
#  amount      :integer          not null
#  user_id     :integer          not null
#  friend_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  author_paid :string           not null
#
class Bill < ApplicationRecord
    validates :description, :amount, :user_id, :friend_id, :author_paid, presence: true


    belongs_to :author,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :receiver,
        foreign_key: :friend_id,
        class_name: :User

    has_many :comments,
        foreign_key: :bill_id,
        class_name: :Comment

    # def get_friend_id
    #     friend_id = bill.author + bill.receiver
    #     friend_id.delete(current_user.id)
    #     return friend_id[0]
    # end
end
