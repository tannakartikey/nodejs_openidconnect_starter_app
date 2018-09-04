
const config = {};

config.callbackRoot = "[YOUR ROOT URL, e.g., http://initech.qryp.to:8003]";

config.opUri = "https://srv.qryp.to";

config.qryptoAuth = {
  clientID: "[YOUR CLIENT_ID]",
  clientSecret: "[YOUR CLIENT_SECRET]",
  authorizationURL: `${config.opUri}/op/auth`,
  tokenURL: `${config.opUri}/op/token`,
  userInfoURL: `${config.opUri}/op/me`,
  callbackURL: `${config.callbackRoot}/auth/qrypto/callback`,
  skipUserProfile: false,
  issuer: `${config.opUri}/op`,
  passReqToCallback : true
};

config.mongoUrl = "[YOUR MongoDB connection URL]";

module.exports = config;
