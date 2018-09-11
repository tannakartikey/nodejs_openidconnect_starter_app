
const crypto = require("crypto");

const config = {};

config.callbackRoot = process.env.DOMAIN_URL;

config.issuer = process.env.OPENID_ISSUER;

config.client = {
  id: process.env.OPENID_CLIENT_ID,
  secret: process.env.OPENID_CLIENT_SECRET,
  redirectURIs: [ `${config.callbackRoot}/auth/qrypto/callback` ]
}

config.qryptoAuth = {
  issuer: config.issuer,
/*
  clientID: config.client.id,
  clientSecret: config.client.secret,
  callbackURL: config.client.redirectURIs[0],
  authorizationURL: `${config.opUri}/op/auth`,
  tokenURL: `${config.opUri}/op/token`,
  userInfoURL: `${config.opUri}/op/me`,
*/
  sessionKey: crypto.randomBytes(32).toString("hex"),
  resolver: { resolve: (identifier, callback) => callback(null, config.issuer)},
  registrar: { resolve: (identifier, callback) => callback(null, config.client)},
  skipUserProfile: false,
  passReqToCallback: true
};

module.exports = config;
