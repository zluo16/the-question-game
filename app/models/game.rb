class Game < ApplicationRecord
    after_initialize :set_defaults

    def self.leaderboard
        Game.order(score: :desc).limit(10)
    end

    def set_defaults
        self.score ||= 0
        self.player ||= "Player #{Game.count}"
    end
end
