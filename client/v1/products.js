const routes = require('./routes');

module.exports = {
  productsGet({
    distance_max = 50000,
    latitude, longitude,
    limit = 40,
    page = 0,
    server_sort = 1,
    sort_direction = 'asc',
    sort_field = 'distance',
  }) {
    return this.request({
      url: routes.getProducts(),
      qs: {
        distance_max,
        latitude,
        longitude,
        limit,
        page,
        server_sort,
        sort_direction,
        sort_field,
      },
    });
  },
};
