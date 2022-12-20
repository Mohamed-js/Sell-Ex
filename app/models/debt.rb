class Debt < ApplicationRecord
    belongs_to :bill
    belongs_to :store

    validates :debtor, presence: true

    scope :month_debts, -> (this_month) {where('created_at > ?', (this_month)).sum(:dept_value)}
end
