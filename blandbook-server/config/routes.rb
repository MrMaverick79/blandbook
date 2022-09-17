Rails.application.routes.draw do


  root to: 'pages#home'

  resources :users, :chatrooms, :comments, :messages, :posts, :urls

  get '/alldata' => 'users#allData'




  #these lines are needed for user authentication
  #this one gets the login token from knock
  post 'user_token' => 'user_token#create'

  #this is the User route
  get '/users/current' => 'users#current'


  

  
  #this line mounts the Action Cable, which is needed for the chat function. It provides the connection between the back end and the front end. 
  mount ActionCable.server => "/cable"




 
end
