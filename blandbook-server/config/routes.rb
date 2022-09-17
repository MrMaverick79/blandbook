Rails.application.routes.draw do


  root to: 'pages#home'

  resources :users, :chatrooms, :comments, :messages, :posts, :urls

  get '/alldata' => 'users#allData'





  #this line is needed for user authentication
  post 'user_token' => 'user_token#create'
  
  #this line mounts the Action Cable, which is needed for the chat function. It provides the connection between the back end and the front end. 
  mount ActionCable.server => "/cable"




  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
>>>>>>> 53a875760b217b3b01190a246aa0967119c54a41
end
