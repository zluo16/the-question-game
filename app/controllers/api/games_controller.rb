class Api::GamesController < ApplicationController

  def index
    @leaderboard = Game.leaderboard
    render json: @leaderboard
  end

  def create
    @game = Game.new(game_params)
    if @game.save
      render json: { status: 200, message: "Success" }
    end
  end

  private

    def game_params
      params.permit(:player, :score)
    end
end
