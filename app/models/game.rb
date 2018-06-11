class Game < ApplicationRecord
    def self.leaderboard
        Game.order(score: :desc).limit(10)
    end
end
