# == Schema Information
#
# Table name: friends
#
#  id           :bigint           not null, primary key
#  requester_id :integer          not null
#  recipient_id :integer          not null
#  confirmed    :boolean          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Friend < ApplicationRecord
    validates_uniqueness_of :recipient_id, scope: :requester_id

    belongs_to :requester,
        foreign_key: :requester_id,
        class_name: :User

    belongs_to :recipient,
        foreign_key: :recipient_id,
        class_name: :User

end
