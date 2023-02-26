class BillsController < ApplicationController
  before_action :authenticate_user!, except: %i[importer import]
  before_action :set_bill, only: %i[ show edit update destroy ]
  skip_before_action :verify_authenticity_token, only: %i[ create ]

  def search
    if params[:q]
      @bills = @current_store.bills.get_by_client_or_bill_id(params[:q])
    end
  end

  # GET /bills/1 or /bills/1.json
  def show
    @bill = @current_store.bills.includes(:sales).find(params[:id])
  end

  # GET /bills/new
  def new
    @bill = Bill.new
    @products = @current_store.products.all.select(:id, :name, :selling_price).order(:name)
  end

  # GET /bills/1/edit
  def edit
  end

  # POST /bills or /bills.json
  def create
    # We have product quantity, bill create, sale create, assign to store, 

    render json: { message: "Saved" }
  end

  # PATCH/PUT /bills/1 or /bills/1.json
  def update
    respond_to do |format|
      if @bill.update(bill_params)
        format.html { redirect_to @bill, notice: "Bill was successfully updated." }
        format.json { render :show, status: :ok, location: @bill }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @bill.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /bills/1 or /bills/1.json
  def destroy
    @bill.destroy
    respond_to do |format|
      format.html { redirect_to bills_url, notice: "Bill was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  def importer
  end

  def import
    require "csv"

    CSV.foreach(params[:csv_file].path, headers: true) do |row|
      Sale.create! row.to_hash
    end

    format.html { redirect_to importer, notice: "imported...!" }
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_bill
    @bill = @current_store.bills.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def bill_params
    params.require(:bill).permit(:total, :buyer)
  end
end
