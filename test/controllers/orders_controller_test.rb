require "test_helper"

class OrdersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @order = orders(:one)
  end

  test "should get index" do
    get orders_url
    assert_response :success
  end

  test "should get new" do
    get new_order_url
    assert_response :success
  end

  test "should create order" do
    assert_difference('Order.count') do
      post orders_url, params: { order: { address: @order.address, city: @order.city, client_id: @order.client_id, country: @order.country, items_count: @order.items_count, phone: @order.phone, product_id: @order.product_id, status_done: @order.status_done, store_id: @order.store_id, total_price: @order.total_price } }
    end

    assert_redirected_to order_url(Order.last)
  end

  test "should show order" do
    get order_url(@order)
    assert_response :success
  end

  test "should get edit" do
    get edit_order_url(@order)
    assert_response :success
  end

  test "should update order" do
    patch order_url(@order), params: { order: { address: @order.address, city: @order.city, client_id: @order.client_id, country: @order.country, items_count: @order.items_count, phone: @order.phone, product_id: @order.product_id, status_done: @order.status_done, store_id: @order.store_id, total_price: @order.total_price } }
    assert_redirected_to order_url(@order)
  end

  test "should destroy order" do
    assert_difference('Order.count', -1) do
      delete order_url(@order)
    end

    assert_redirected_to orders_url
  end
end
