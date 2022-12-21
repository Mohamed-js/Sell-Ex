require "application_system_test_case"

class OrdersTest < ApplicationSystemTestCase
  setup do
    @order = orders(:one)
  end

  test "visiting the index" do
    visit orders_url
    assert_selector "h1", text: "Orders"
  end

  test "creating a Order" do
    visit orders_url
    click_on "New Order"

    fill_in "Address", with: @order.address
    fill_in "City", with: @order.city
    fill_in "Client", with: @order.client_id
    fill_in "Country", with: @order.country
    fill_in "Items count", with: @order.items_count
    fill_in "Phone", with: @order.phone
    fill_in "Product", with: @order.product_id
    check "Status done" if @order.status_done
    fill_in "Store", with: @order.store_id
    fill_in "Total price", with: @order.total_price
    click_on "Create Order"

    assert_text "Order was successfully created"
    click_on "Back"
  end

  test "updating a Order" do
    visit orders_url
    click_on "Edit", match: :first

    fill_in "Address", with: @order.address
    fill_in "City", with: @order.city
    fill_in "Client", with: @order.client_id
    fill_in "Country", with: @order.country
    fill_in "Items count", with: @order.items_count
    fill_in "Phone", with: @order.phone
    fill_in "Product", with: @order.product_id
    check "Status done" if @order.status_done
    fill_in "Store", with: @order.store_id
    fill_in "Total price", with: @order.total_price
    click_on "Update Order"

    assert_text "Order was successfully updated"
    click_on "Back"
  end

  test "destroying a Order" do
    visit orders_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Order was successfully destroyed"
  end
end
