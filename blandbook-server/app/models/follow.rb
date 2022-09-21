class Follow < ApplicationRecord
    belongs_to :follower, class_name: 'User'
    belongs_to :followed, class_name: 'User'

   #the below allows us to chack whether the person's request to firend is pending or approved. 
#    enum status: [:pending, :approved] 

#    after_initialize :init

#   def init
#     self.status ||= :pending   # default value for status
#   end
end
