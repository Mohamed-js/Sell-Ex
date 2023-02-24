class Client < ApplicationRecord
    has_secure_password
    belongs_to :store
    has_many :orders

    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, presence: true
    validates :password, length: { in: 6..20 }, presence: true
    validates :first_name, presence: true
    validates :last_name,  presence: true
end
