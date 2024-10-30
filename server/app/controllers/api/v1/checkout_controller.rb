class Api::V1::CheckoutController < ApplicationController
  # Method to create the checkout
  def create
    order = Order.new(order_date: Time.current)
    cart_items = order_params[:cart_items]

    # Calculate total price and prepare order items
    total_price, errors = calculate_total_price_and_build_order_items(cart_items, order)

    # If there were errors, return them
    if errors.any?
      render json: { error: errors }, status: :unprocessable_entity
      return
    end

    # Set the total price for the order
    order.total_price = total_price

    # Save the order and associated order items
    if order.save
      render json: { total_price: total_price, order: order }, status: :ok
    else
      render json: { error: order.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # New method to calculate the total price without creating an order
  def calculate_price
    cart_items = order_params[:cart_items]
    total_price, errors = calculate_total_price(cart_items)

    if errors.any?
      render json: { error: errors }, status: :unprocessable_entity
    else
      render json: { total_price: total_price }, status: :ok
    end
  end

  private

  # Method to calculate total price and build order items
  def calculate_total_price_and_build_order_items(cart_items, order)
    total_price = 0
    errors = []

    cart_items.each do |item|
      product = Product.find_by(code: item[:product_code])

      if product
        quantity = item[:quantity].to_i
        item_price = product.apply_discount(quantity) * quantity
        total_price += item_price

        # Build OrderItem
        order.order_items.build(product: product, quantity: quantity)
      else
        errors << "Product not found: #{item[:product_code]}"
      end
    end

    [total_price, errors]
  end

  # Method to calculate total price
  def calculate_total_price(cart_items)
    total_price = 0
    errors = []

    cart_items.each do |item|
      product = Product.find_by(code: item[:product_code])

      if product
        quantity = item[:quantity].to_i
        item_price = product.apply_discount(quantity) * quantity
        total_price += item_price
      else
        errors << "Product not found: #{item[:product_code]}"
      end
    end
    total_price = total_price.round(2)
    [total_price, errors]
  end

  # Ensure only required parameters are processed
  def order_params
    params.require(:checkout).permit(cart_items: [:product_code, :quantity])
  end
end
