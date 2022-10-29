require 'rails_helper'

RSpec.describe "Api::Users", type: :request do
  describe "GET show" do
    let (:headers) do
      {'ACCEPT' => 'application/json'}
    end

    context "user exits" do
      it "is successful" do
        user = create(:user)
        get api_user_path(user), headers: headers
        expect(response).to be_successful
      end
    end

    context "user does not exists" do
      it "is not found" do
        get api_user_path(id: "junk"), headers: headers
        expect(response).to eq(404)
      end
    end
  end
end
   