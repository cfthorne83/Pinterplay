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
    validates :title, :user_id, presence: true
    validate :ensure_image

    has_one_attached :photo

    belongs_to :user
    # , 
        # primary_key: :id,
        # foreign_key: :user_id,
        # class_name: :User,
        # optional: true

    # belongs_to :board
    # p, 
        # primary_key: :id,
        # foreign_key: :board_id,
        # class_name: :Board,
        # optional: true

    has_many :board_pins,
        primary_key: :id, 
        foreign_key: :pin_id,
        class_name: :BoardPin,
        dependent: :destroy
        # optional: true,

    has_many :boards,
        through: :board_pins,
        source: :board
        # optional: true

    def ensure_image
        unless self.photo.attached?
            errors[:photo] << "must be attached"
        end
    end
end
