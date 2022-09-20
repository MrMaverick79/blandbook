class ChatroomSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :messages
  # attribute :users do |chatroom|
  #   UserSerializer.new(chatroom.users.uniq)
  # end
end
