Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :index]
    resources :bills, only: [:show, :create, :destroy, :index, :update]
    resource :session, only: [:create, :destroy]
    resources :friends, only: [:create, :destroy, :index]
    resources :comments, only: [:show, :index, :create, :destroy]
  end
  
  root 'static_pages#root'
end
