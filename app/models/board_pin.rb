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
    validates :board_id, presence: true
    validates :pin_id, presence: true

    belongs_to :pin,
        primary_key: :id,
        foreign_key: :pin_id,
        class_name: :Pin

    belongs_to :board,
        primary_key: :id,
        foreign_key: :board_id,
        class_name: :Board 

end
