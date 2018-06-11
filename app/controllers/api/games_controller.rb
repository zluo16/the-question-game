class Api::GamesController < ApplicationController
  before_action :set_game, only: [:show, :edit, :update, :destroy]

  def index
    @leaderboard = Game.leaderboard
    render json: @leaderboard
  end

  def create
    @game = Game.new(game_params)

    respond_to do |format|
      if @game.save
        redirect_to index
      end
    end
  end

  private

    # Never trust parameters from the scary internet, only allow the white list through.
    def game_params
      params.permit(:player, :score)
    end
end
