Rails.application.routes.draw do

  root to: 'pages#home'

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'

  resources :chatrooms, :comments, :messages, :posts, :urls

  # all data in json file
  get '/alldata' => 'users#allData'

  get '/users' => 'users#index'



  # these lines are needed for user authentication
  # this one gets the login token from knock
  # do not put :users in resources
  post 'user_token' => 'user_token#create'

  # this is the User route
  get '/users/current' => 'users#current'
  
  # for the frontend test
  get '/users/last_user' => 'users#show'
  get '/users/:id/all_chat_rooms' => 'users#all_chat_rooms'

  

  
  #this line mounts the Action Cable, which is needed for the chat function. It provides the connection between the back end and the front end. 
  mount ActionCable.server => "/cable"




 
end
