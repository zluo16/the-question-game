class Clue < ApplicationRecord
    def self.question
        clue = Clue.order("RANDOM()").first
        answers = Clue.select(:answer).order("RANDOM()").limit(3)
        return { clue: clue, answers: answers }
    end
end
