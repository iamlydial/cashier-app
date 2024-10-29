class Order < ApplicationRecord
  has_many :order_items
  has_many :products, through: :order_items

  validates :total_price, presence: true, numericality: { greater_than_or_equal_to: 0 }
  validates :order_date, presence: true
  
  validate :must_have_at_least_one_product

  private

  def must_have_at_least_one_product
    if order_items.empty?
      errors.add(:base, 'An order must have at least one product.')
    end
  end
end
