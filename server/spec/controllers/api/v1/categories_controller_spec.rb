require 'rails_helper'
RSpec.describe Api::V1::CategoriesController, type: :controller do
    describe 'GET #index' do
      let!(:category1) { Category.create!(name: 'Category 1') }
      let!(:category2) { Category.create!(name: 'Category 2') }
  
      before { get :index }
  
      it 'renders the categories in JSON format' do
        json_response = JSON.parse(response.body)
  
        expect(json_response).to be_an(Array)
        expect(json_response.size).to eq(2) # Check if the number of categories is as expected
  
        expect(json_response).to include(
          a_hash_including(
            'id' => category1.id,
            'name' => category1.name
          ),
          a_hash_including(
            'id' => category2.id,
            'name' => category2.name
          )
        )
      end
    end
  end
  