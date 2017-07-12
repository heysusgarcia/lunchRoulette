module Api::VenuesHelper

  def random_venue(venues_data)
    items = venues_data.groups[0].items
    # generate random number to select random venue
    rand_num = rand(0...items.length)
    venue = items[rand_num].venue

    name = venue.name

    if (venue.menu)
      menu_url = venue.menu.url
    else
      menu_url = ""
    end

    # venue data formatted in a way that the controller would typically return data
    [{ id: 1, name: name, menu_url: menu_url }]

  end
end
