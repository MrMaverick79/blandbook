class User < ApplicationRecord

    validates :screen_name, length: {minimum: 2}, uniqueness: true
    validates :email, presence: true, uniqueness: true

    has_secure_password

    has_many :posts
    has_many :comments
    has_many :messages

    has_and_belongs_to_many :chatrooms

    has_many :urls, through: 'posts'

    # This is to allow follower and following 

    
    #These associations are needed to allow following and followers

    has_many :following_relationships, class_name: 'Follow', foreign_key: 'follower_id'
    has_many :followed_relationships,  class_name: 'Follow', foreign_key: 'followed_id'

    has_many :following, through: :following_relationships, source: :followed
    has_many :followers, through: :followed_relationships,  source: :follower

    # This checks whether an existing follow relationship exists, and will not allow a new one to be formed if it already exists
    def follow_safe ( user_to_follow)
        if self.following.include? user_to_follow
            return false
        else
            self.following << user_to_follow
            return true #The follow was successful
        end
    end #follow_safe 


    # GEOCODING: automatically lookup the GPS coordinates for the location
    geocoded_by :location
    
    after_validation :geocode # actually do lookup when .create-ing




end
