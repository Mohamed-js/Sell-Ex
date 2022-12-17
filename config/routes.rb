Rails.application.routes.draw do
  devise_for :users
  root "sales#index"
  get "/sell", to: "bills#new"
  get "/new-product", to: "home#new"
  get "/products/add-items", to: "home#create"
  resources :transactions do
    collection do
      get :all
    end
  end
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
  resources :charges, only: [:index, :show, :new, :create]
  resources :clients
end
