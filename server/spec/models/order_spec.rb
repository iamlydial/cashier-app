require 'rails_helper'

RSpec.describe Order, type: :model do
  it { should have_many(:order_items) }
  it { should have_many(:products).through(:order_items) }

  it { should validate_presence_of(:total_price) }
  it { should validate_numericality_of(:total_price).is_greater_than_or_equal_to(0) }
  
  it { should validate_presence_of(:order_date) }
end

