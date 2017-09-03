module.exports = {
  sessionSetAuthToken(token) {
    this.sessionAuthToken = token;
  },
  sessionGetAuthToken() {
    return this.sessionAuthToken;
  },
  sessionSetProxy(proxy) {
    this.proxy = proxy;
  },
  sessionGetProxy() {
    return this.proxy;
  },
};
