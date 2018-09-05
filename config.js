const config = {};

config.callbackRoot = process.env.DOMAIN_URL;

config.opUri = process.env.OPENID_HOST;

config.qryptoAuth = {
  clientID: process.env.OPENID_CLIENT_ID,
  clientSecret: process.env.OPENID_CLIENT_SECRET,
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