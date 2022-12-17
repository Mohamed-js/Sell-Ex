class TransactionsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_transaction, only: %i[ show edit update destroy ]

  # GET /transactions or /transactions.json
  def index
    @transactions = Transaction.order('created_at desc')
  end

  def all
  end
  

  # GET /transactions/1 or /transactions/1.json
  def show
  end

  # GET /transactions/new
  def new
    @transaction = Transaction.new
  end

  # GET /transactions/1/edit
  def edit
  end

  # POST /transactions or /transactions.json
  def create
    @store = Store.first
    @transaction = Transaction.new(transaction_params)
    @transaction.dorg_was = @store.dorg

    if @transaction.transaction_type == 'decrease'
      @store.dorg -= @transaction.transaction_value
    else
      @store.dorg += @transaction.transaction_value
      if @transaction.title == 'فودافون كاش'
        p 'heeeeeeeeeeeeeeeey'
        @sale = Sale.new(name: 'فودافون كاش', buying_price: 0, selling_price: @transaction.transaction_value, quantity: 1, seller: current_user.email, bill_id: Bill.first.id, product_id: Product.first.id)
        @sale.errors.full_messages
      end
    end

    respond_to do |format|
      if @transaction.save
        if @sale
          @sale.save
        end
        @store.save
        format.html { redirect_to transactions_url, notice: "تمت المعاملة بنجاح." }
        format.json { render :show, status: :created, location: @transaction }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @transaction.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /transactions/1 or /transactions/1.json
  def update
    respond_to do |format|
      if @transaction.update(transaction_params)
        format.html { redirect_to transactions_url, notice: "Transaction was successfully updated." }
        format.json { render :show, status: :ok, location: @transaction }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @transaction.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /transactions/1 or /transactions/1.json
  def destroy
    @transaction.destroy
    respond_to do |format|
      format.html { redirect_to transactions_url, notice: "Transaction was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_transaction
      @transaction = Transaction.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def transaction_params
      params.require(:transaction).permit(:title, :transaction_value, :dorg_was, :notes, :transaction_type)
    end
end
