class Comment < ApplicationRecord

    belongs_to :post, optional: true
    belongs_to :user, optional: true

    has_many :urls, through: 'post'


end
