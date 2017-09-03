const APP_VERSION = '2.3';
const HOSTNAME = 'api.youla.io';
const ORIGIN = `https://${HOSTNAME}`;
const API_V1_ENDPOINT = `${ORIGIN}/api/v1`;
const USERAGENT = `Youla/${APP_VERSION} (iOS Version 10.3.3 (Build 14G60))`;

module.exports = {
  APP_VERSION, HOSTNAME, ORIGIN, API_V1_ENDPOINT, USERAGENT,
};
