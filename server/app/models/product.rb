class Product < ApplicationRecord
  belongs_to :category
  has_many :order_items

  validates :code, presence: true, uniqueness: true
  validates :name, presence: true
  validates :price, presence: true, numericality: { greater_than_or_equal_to: 0 }
  
  def apply_discount(quantity)
    discounted_price = self.price

    case self.code
    when 'SR1' # Strawberries
      discounted_price = 4.50 if quantity >= 3 # Bulk price for strawberries
    when 'CF1' # Coffee
      discounted_price *= (2.0 / 3.0) if quantity >= 3 # Apply 2/3 price discount for coffees
    when 'GR1' # Green Tea
      amount_to_pay = (quantity / 2.0).ceil # Buy one get one free
      discounted_price = self.price * amount_to_pay
    end

    discounted_price
  end
end
