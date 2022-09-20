class User < ApplicationRecord

    validates :screen_name, length: {minimum: 2}, uniqueness: true
    validates :email, presence: true, uniqueness: true

    has_secure_password

    has_many :posts
    has_many :comments
    has_many :messages

    has_and_belongs_to_many :chatrooms

    has_many :urls, through: 'posts'

end
