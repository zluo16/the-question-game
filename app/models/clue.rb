class Clue < ApplicationRecord
    has_many :question_clues
    has_many :questions, through: :question_clues
end
