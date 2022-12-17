class Bill < ApplicationRecord
    has_many :sales, dependent: :destroy
    has_one :debt
end
