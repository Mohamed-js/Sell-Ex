class DebtsController < ApplicationController
    before_action :authenticate_user!
    before_action :set_debt, only: [:update, :destroy, :edit]

    # All debts
    def index
        @debts = Debt.all
    end

    def edit;end

    # Partial pay
    def update
        @store = Store.first
        money_to_pay = params[:debt][:money].to_i
        if money_to_pay < @debt.dept_value
            @debt.dept_value -= money_to_pay
            @store.dorg += money_to_pay
            @store.save
            @debt.save
            redirect_to '/debts'
        else
            redirect_to edit_debt_path, notice: 'لا يمكنك سداد مبلغ اكبر من الدين. لو أردت سداد المبلغ كله اضغط علي سداد بالكامل.'
        end
    end
    
    # Full pay
    def destroy
        @store = Store.first
        @store.dorg += @debt.dept_value
        if @store.save
            @debt.destroy
        end
        redirect_to '/debts'
    end
    
    private
    def set_debt
        @debt = Debt.find(params[:id])
    end
end