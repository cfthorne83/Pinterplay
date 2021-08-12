Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:new, :create, :destroy]
    resources :users, only: [:index, :create, :show, :update]
    resources :pins, only: [:create, :index, :show, :update, :edit, :destroy]
    resources :boards, only: [:create, :index, :show, :update, :edit, :destroy]
    resources :friendships, only: [:create, :index, :destroy]
    resources :board_pins, only: [:create, :destroy]
  end

  
end
