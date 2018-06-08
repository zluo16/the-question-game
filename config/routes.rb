Rails.application.routes.draw do
  get '/', to: 'client#index'
  namespace :api do
    get '/clue', to: 'clues#new_clue'
    get '/dumby_answers', to: 'clues#dumby_answers'
    resources :games
  end
end
