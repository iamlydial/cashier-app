class Product < ApplicationRecord
  belongs_to :category

  validates :code, presence: true, uniqueness: true
  validates :name, presence: true
  validates :price, presence: true, numericality: { greater_than_or_equal_to: 0 }
  
end