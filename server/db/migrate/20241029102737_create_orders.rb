class CreateOrders < ActiveRecord::Migration[7.2]
  def change
    create_table :orders do |t|
      t.decimal :total_price, null: false, precision: 10, scale: 2
      t.datetime :order_date, null: false

      t.timestamps
    end
  end
end


