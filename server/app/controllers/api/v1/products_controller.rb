# app/controllers/api/v1/products_controller.rb
module Api
    module V1
      class ProductsController < ApplicationController
        def index
          products = Product.all
          render json: products
        end

        def calculate_price
          product = Product.find(params[:id])
          quantity = params[:quantity].to_i
      
          if quantity < 1
            render json: { error: "Quantity must be at least 1" }, status: :unprocessable_entity
            return
          end
      
          total_price = product.apply_discount(quantity)
          render json: { updated_price: total_price }
        end
      end
    end
  end
  
