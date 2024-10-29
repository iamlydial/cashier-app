require 'rails_helper'

RSpec.describe Product, type: :model do
  it "is valid with valid attributes" do
    category = Category.create(name: "Teas")
    product = Product.new(code: "GR1", name: "Green Tea", price: 3.11, category: category)
    expect(product).to be_valid
  end

  it "is not valid without a code" do
    product = Product.new(code: nil)
    expect(product).to_not be_valid
  end
end
