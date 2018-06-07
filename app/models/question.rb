class Question < ApplicationRecord
    has_many :question_clues
    has_many :clues, through: :question_clues
end
