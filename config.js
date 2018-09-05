const config = {};

config.callbackRoot = "https:/da-nodejs.herokuapp.com";

config.opUri = "https://srv.qryp.to";

config.qryptoAuth = {
  clientID: "0474a72a-3a58-482c-89bb-e1f6bcd4e7cb",
  clientSecret: "5J3m572iiRDAnnZjLT4uRLWS4vyjeEW3k1YHu9K+0VZmIq5on21bAabJVKZkof9t",
  authorizationURL: `${config.opUri}/op/auth`,
  tokenURL: `${config.opUri}/op/token`,
  userInfoURL: `${config.opUri}/op/me`,
  callbackURL: `${config.callbackRoot}/auth/qrypto/callback`,
  skipUserProfile: false,
  issuer: `${config.opUri}/op`,
  passReqToCallback: true
};

config.mongoUrl = "[YOUR MongoDB connection URL]";

module.exports = config;