class Pin < ApplicationRecord
    validates :title, presence: true
    validates :creator_id, presence: true

    has_one_attached :photo
end
