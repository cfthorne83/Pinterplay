# == Schema Information
#
# Table name: pins
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  body       :string
#  creator_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Pin < ApplicationRecord
    validates :title, presence: true
    # validates :creator_id, presence: true

    has_one_attached :photo

    belongs_to :user, 
        foreign_key: :creator_id,
        class_name: :User,
        optional: true

    belongs_to :board, 
        foreign_key: :board_id,
        class_name: :Board,
        optional: true

    # has_many :board_pins, 
    #     foreign_key: :pin_id,


    has_many :boards,
        through: :board_pin


end
