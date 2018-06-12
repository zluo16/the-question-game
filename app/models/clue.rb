class Clue < ApplicationRecord
    def self.question
        clue = Clue.order("RANDOM()").first
        answers = Clue.select(:id, :answer).where(category_id: clue.category_id).order("RANDOM()").limit(3)
        return { clue: clue, answers: answers }
    end
end
