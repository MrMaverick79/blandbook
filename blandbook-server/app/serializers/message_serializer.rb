class MessageSerializer
  include FastJsonapi::ObjectSerializer
  attributes :user_id, :chatroom_id, :content
end
