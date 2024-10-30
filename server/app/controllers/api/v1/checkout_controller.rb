class Api::V1::CheckoutController < ApplicationController
  # Method to create the checkout
  def create
    # Initialize a new order
    order = Order.new(order_date: Time.current)
    cart_items = order_params[:cart_items]

    # Log the incoming cart items
    puts "Incoming cart items: #{cart_items.inspect}"

    # Variable to store the total order price
    total_price = 0

    # Iterate through each item in the cart_items and process them
    cart_items.each do |item|
      product = Product.find_by(code: item[:product_code])

      if product
        # Get the quantity as an integer
        quantity = item[:quantity].to_i

        # Calculate the price using the discount logic in the product model, applied to quantity
        item_price = product.apply_discount(quantity) * quantity
        total_price += item_price

        # Create an OrderItem for this product and associate it with the order
        order.order_items.build(product: product, quantity: quantity)
      else
        render json: { error: "Product not found: #{item[:product_code]}" }, status: :unprocessable_entity
        return
      end
    end

    # Set the total price for the order
    order.total_price = total_price

    # Save the order and associated order items
    if order.save
      # Return a success response with order details
      render json: { total_price: total_price, order: order }, status: :ok
    else
      # Handle validation errors (e.g., missing products)
      render json: { error: order.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  # Ensure only required parameters are processed for the create function
  def order_params
    params.require(:checkout).permit(cart_items: [:product_code, :quantity])
  end
end
