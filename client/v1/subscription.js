const routes = require('./routes');

module.exports = {
  subscriptionFollow(user_ids) {
    return this.subscriptionFollowing({ action: 'PUT', user_ids });
  },
  subscriptionFollowing({ action, user_ids }) {
    return this.request({
      method: 'POST',
      url: routes.subscriptionFollowing(),
      body: {
        user_ids,
      },
      headers: {
        'X-HTTP-Method-Override': action,
      },
    });
  },
};
