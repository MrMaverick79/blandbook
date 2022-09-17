Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  
  #this line mounts the Action Cable, which is needed for the chat function. It provides the connection between the back end and the front end. 
  mount ActionCable.server => "/cable"




end
