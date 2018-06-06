class QuestionClue < ApplicationRecord
  belongs_to :question
  belongs_to :clue
end
