# == Schema Information
#
# Table name: board_pins
#
#  id         :bigint           not null, primary key
#  board_id   :integer          not null
#  pin_id     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class BoardPin < ApplicationRecord

    belongs_to :pin,
        primary_key: :id,
        foreign_key: :pin_id

    belongs_to :board,
        primary_key: :id,
        foreign_key: :board_id 
end
