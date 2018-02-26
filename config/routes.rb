Rails.application.routes.draw do
  namespace :study do
    resources :tasks
  end
  namespace :fmis do
    resources :records
  end

  # get '/test/wechat',to: 'wechats#auth_wechat'
  # post '/test/wechat',to: 'wechats#process_request' 

  # devise_for :users
  devise_for :users, controllers: {
  	registrations: 'users/registrations',
    sessions: 'users/sessions'
  }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get 'welcome/index'
  root to: "home#index"
end
