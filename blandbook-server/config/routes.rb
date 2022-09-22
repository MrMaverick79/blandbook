Rails.application.routes.draw do

  root to: 'pages#home'

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'

  resources :chatrooms, :comments, :messages, :posts, :urls

  # all data in json file
  get '/alldata' => 'users#allData'
  #to display followers and following
  get '/friends/:id' => 'users#friends'
  get '/users' => 'users#index'

  #To display only the avatar in the chat
  get '/chatrooms/avatar/:id' => 'chatrooms#avatar'

  post '/users' => 'users#create'

  #Start and stop following another user
  post '/followers/:id/:follow_id' => 'users#startFollow'

  delete '/followers/:id/:follower_id' => 'users#endFollow'


  # these lines are needed for user authentication
  # this one gets the login token from knock
  # do not put :users in resources
  post 'user_token' => 'user_token#create'

  # this is the User route
  get '/users/current' => 'users#current'
  
  # for the frontend test
  get '/users/last_user' => 'users#show'
  get '/users/:id/all_chat_rooms' => 'users#all_chat_rooms'

  # for getting user location
  get '/users/locations' => 'users#get_locations'

  get '/search/:keyword' => 'posts#search'

  

  
  #this line mounts the Action Cable, which is needed for the chat function. It provides the connection between the back end and the front end. 
  mount ActionCable.server => "/cable"




 
end
