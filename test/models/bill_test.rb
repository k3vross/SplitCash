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
require 'test_helper'

class BillTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
