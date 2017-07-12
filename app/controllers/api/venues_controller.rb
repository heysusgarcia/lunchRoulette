class Api::VenuesController < ApplicationController
  def index
    @venues = foursquare.search_venues(:ll => '37.81,-122.26', :section => 'food', :radius => 1000)
    render json: @venues
  end
end
