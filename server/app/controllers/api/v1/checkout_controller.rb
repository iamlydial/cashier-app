class Api::V1::CheckoutController < ApplicationController
    #method to create the checkout
    def create
      # checkout_params allows parameters and retrieve cart items
      cart_items = checkout_params[:cart_items]
  
      # Log the incoming cart items 
      puts "Incoming cart items: #{cart_items.inspect}"
  
      # variable to store order total
      total_price = 0
  
      # initialization of a new order
      order = Order.new(order_date: Time.current)
  
      # Iterate through each item in the cart_items and process them
      cart_items.each do |item|
        product = Product.find_by(code: item[:product_code])
  
        if product
          # if we have a product get the quantity ias an interger
          quantity = item[:quantity].to_i
  
          # calculate the price using the discount logic in the product model, applied to quantity
          item_price = product.apply_discount(quantity) * quantity
          total_price += item_price
  
          # create an OrderItem for this product and associate it with the order
          order.order_items.build(product: product, quantity: quantity)
        else
          render json: { error: "Product not found: #{item[:product_code]}" }, status: :unprocessable_entity
          return
        end
      end
  
      # set the total price for the order
      order.total_price = total_price
  
      # save the order and associated order items
      if order.save
        # return a success response with order details
        render json: { total_price: total_price, order: order }, status: :ok
      else
        # andle validation errors (e.g., missing products)
        render json: { error: order.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    private
  
    # make sure only required parametrs are processed for the create function 
    def checkout_params
      params.require(:checkout).permit(cart_items: [:product_code, :quantity])
    end
  end
  