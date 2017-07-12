export const fetchVenue = () => (
  $.ajax({
    method: 'GET',
    url: 'api/venues'
  })
);
