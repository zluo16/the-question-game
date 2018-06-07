Rails.application.routes.draw do

  namespace :api do
    resources :games
    resources :clues
    resources :questions
  end

end
