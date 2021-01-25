# == Schema Information
#
# Table name: boards
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Board < ApplicationRecord
    validates :title, :user_id, presence: true

    has_many :pins

    belongs_to :user 
end
