class Follow < ApplicationRecord
    belongs_to :follower, class_name: 'User'
    belongs_to :followed, class_name: 'User'

   #the below allows us to chack whether the person's request to firend is pending or approved. 
   enum status: [:pending, :approved] 
end
