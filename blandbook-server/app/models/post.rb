class Post < ApplicationRecord

    has_many :urls
    has_many :comments
    
    belongs_to :user, optional: true







end
