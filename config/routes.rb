Rails.application.routes.draw do
  devise_for :users
  root "sales#index"
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
  resources :categories
end
