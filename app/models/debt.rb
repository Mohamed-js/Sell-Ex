class Debt < ApplicationRecord
    belongs_to :bill

    validates :debtor, presence: true
end
