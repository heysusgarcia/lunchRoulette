class Api::VenuesController < ApplicationController
  include Api::VenuesHelper

  def index
    venues = foursquare.explore_venues(:ll => '37.81,-122.26', :section => 'food', :radius => 1000, :openNow => 1)
    @venue = random_venue(venues)

    render json: @venue
  end
end
