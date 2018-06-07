Rails.application.routes.draw do
  get '/', to: 'client#index'
  namespace :api do
    resources :games
    resources :clues
    resources :questions
  end
end
