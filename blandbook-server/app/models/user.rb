class User < ApplicationRecord

    has_secure_password

    has_many :posts
    has_many :comments
    has_many :messages

    has_and_belongs_to_many :chatrooms

    has_many :urls, through: 'posts'

end
