class Url < ApplicationRecord

    belongs_to :post, optional: true

    has_many :users, through: 'post'
    has_many :comments, through: 'post'



end
