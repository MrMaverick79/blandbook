class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :screen_name
  
  # attribute :avatar do |user| 
  #   Rails.application.routes.url_helpers.rails_blob_path(user.avatar) if user.avatar.attached?
  # end

  # attribute :chatrooms do |user|
  #   user.chatrooms.uniq
  # end
end
