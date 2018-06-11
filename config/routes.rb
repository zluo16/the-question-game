Rails.application.routes.draw do
  root to: 'client#index'
  namespace :api do
    get '/clue', to: 'clues#new_clue'
    get '/leaderboard', to: 'games#index'
    post '/add-player', to: 'games#create'
  end
end
