const request = require('request-promise');
const CONSTANTS = require('./constants');

module.exports = {
  request({ url, method = 'GET', body, form, qs, headers = {} }) {
    Object.assign(headers, {
      'X-Auth-Token': this.sessionAuthToken,
      'User-Agent': CONSTANTS.USERAGENT,
    });

    return request({
      url,
      method,
      body,
      form,
      qs,
      headers,
      baseUrl: CONSTANTS.API_V1_ENDPOINT,
      proxy: this.sessionGetProxy(),
      json: true,
    });
  },
};
