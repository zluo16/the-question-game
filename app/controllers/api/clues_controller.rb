class Api::CluesController < ApplicationController
  before_action :set_clue, only: [:new_clue]

  def new_clue
    render json: @clue
  end

  private

    def set_clue
      @clue = Clue.question
    end

end
