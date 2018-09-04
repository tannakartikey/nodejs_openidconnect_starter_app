const config = {};

config.callbackRoot = "[https:/da-nodejs.herokuapp.com/]";

config.opUri = "https://srv.qryp.to";

config.qryptoAuth = {
  clientID: "[OPENID_CLIENT_ID]",
  clientSecret: "[OPENID_CLIENT_SECRET]",
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