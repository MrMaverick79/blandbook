Rails.application.routes.draw do

  root to: 'pages#home'

  resources :users, :chatrooms, :comments, :messages, :posts, :urls

  get '/alldata' => 'users#allData'

end
