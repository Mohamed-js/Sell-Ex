class BillsController < ApplicationController
  before_action :authenticate_user!, except: %i[importer import]
  before_action :set_bill, only: %i[ show edit update destroy ]
  skip_before_action :verify_authenticity_token, only: %i[ create ]

  def search
    if params[:q]
      @bills = Bill.where(id: params[:q]).or(Bill.where(buyer: params[:q]))
    end
  end
  

  # GET /bills/1 or /bills/1.json
  def show
    @bill = Bill.includes(:sales).find(params[:id])
  end

  # GET /bills/new
  def new
    @bill = Bill.new
    @products = Product.all.select(:id, :name, :selling_price, :whole_sale_price).order(:name)
  end

  # GET /bills/1/edit
  def edit
  end

  # POST /bills or /bills.json
  def create
    notes = ""
    @store = Store.first
    buyer = params['buyer'] ? params['buyer'] : nil
    paid_amount = params['paid_amount'] ? params['paid_amount'].to_i : nil
    seller = current_user.email
    @bill = Bill.create(buyer: buyer)
    @bill.seller = seller
    bill_count = 0
    params.to_enum.each_with_index do |pair, index|
      is_sale = pair[0] =~ /sale_[0-9]/
      if is_sale == 0
        # Extract values
        i =  index + 1
        discount = (pair[1]["sale#{i}[discount]"] ? pair[1]["sale#{i}[discount]"] : 0).to_i
        quantity = (pair[1]["sale#{i}[quantity]"]).to_i
        product_id = pair[1]["sale#{i}[id]"]
        product = Product.find(product_id)
        item = Item.where(product_id: product_id).order('created_at ASC').first
        price_to_use = pair[1]["sale#{i}[type]"] === "selling_price" ? product.selling_price : product.whole_sale_price

        sale_type = pair[1]["sale#{i}[type]"] === "selling_price" ? "جمهور" : "جملة"
        
        # Create sale
        sale = Sale.new(bill_id: @bill.id, product_id: product_id, quantity: quantity, name: product.name, buying_price: item.buying_price, selling_price: price_to_use, validity: product.validity, discount: discount, sale_type: sale_type)

        # If a valid sale ==> Add to bill
        if quantity <= product.items.count
          if sale.save
            bill_count += 1
            if @bill.total
              @bill.total = @bill.total + price_to_use * quantity - discount
            else
              @bill.total = price_to_use * quantity - discount
            end
            quantity.times do
              item = Item.where(product_id: product_id).order('created_at ASC').first
              item.destroy
            end
            product.quantity -= quantity
            product.save
          else
            redirect_to '/sell', notice: 'حدث خطأ مجهول!'
          end
        else
          notes += "الكمية التي تريد بيعها من #{product.name} ليست متاحه في المخزن. || "
        end
      end
    end

    # Handle Store Selling Dorge && Save
    @store.dorg += @bill.total

    if paid_amount && @bill.total > paid_amount
      Debt.create(debtor: buyer, bill_id: @bill.id, dept_value: @bill.total - paid_amount)
      @store.dorg -= @bill.total - paid_amount
    end

    if bill_count == 0
      @bill.destroy
    else
      @store.save
      @bill.save
    end

    render json: {message: "Saved"}
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
    require 'csv'    


    CSV.foreach(params[:csv_file].path, headers: true) do |row|
      Sale.create! row.to_hash
    end

    format.html { redirect_to importer, notice: "imported...!" }
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bill
      @bill = Bill.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def bill_params
      params.require(:bill).permit(:total, :buyer)
    end
end
