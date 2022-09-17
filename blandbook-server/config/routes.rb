Rails.application.routes.draw do
<<<<<<< HEAD

  root to: 'pages#home'

  resources :users, :chatrooms, :comments, :messages, :posts, :urls

  get '/alldata' => 'users#allData'

=======
  post 'user_token' => 'user_token#create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
>>>>>>> 301f61ba21b547269f301d0a681b3c646208f5bb
end
