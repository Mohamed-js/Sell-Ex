Rails.application.routes.draw do
  root "sales#index"
  resources :orders
  devise_for :users
  resources :stores do
    collection do
      get "/:id/activate", to: "stores#activate"
    end
  end
  resources :transactions
  resources :debts, only: [:index, :update, :edit, :destroy]
  resources :items
  resources :sales do
    collection do
      get :all
    end
  end
  resources :bills do
    collection do
      get :search
    end
  end
  resources :products
  resources :clients
  get '/category/:id', to: 'categories#show', constraints: { subdomain: 'app' }
  resources :categories


  get "/stores/:id/*path", to: "stores#show"
end
