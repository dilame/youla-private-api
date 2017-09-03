/* eslint-disable global-require */
function YoulaPrivateApiClientV1({ token, proxy }) {
  if (token) this.sessionSetAuthToken(token);
  if (proxy) this.sessionSetProxy(proxy);
}

Object.assign(YoulaPrivateApiClientV1, {
  Exceptions: require('./v1/exceptions'),
});

Object.assign(YoulaPrivateApiClientV1.prototype,
  require('./v1/request'),
  require('./v1/session'),
  require('./v1/subscription'),
  require('./v1/products'),
);

module.exports = YoulaPrivateApiClientV1;
