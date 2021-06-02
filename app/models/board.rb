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
    validates :title, presence: true

    belongs_to :user 
    # has_many :pins, dependent: :destroy

    has_many :board_pins, 
        primary_key: :id,
        foreign_key: :board_id,
        class_name: :BoardPin,
        dependent: :destroy

    has_many :pins, 
        through: :board_pins,
        source: :pin
        optional: true

end
