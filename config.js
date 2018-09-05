const config = {};

config.callbackRoot = "https://da-node-test.herokuapp.com/";

config.opUri = "https://srv.qryp.to";

config.qryptoAuth = {
  clientID: "4a96df5a-0663-4cde-b536-048ac9b32c3a",
  clientSecret: "Z0pUcXlkbSSpPv9opgLxVPKcyEIZ/iYLnHdcVsISyQ1p6ZzO/yqmJCL3a4cHMdUM",
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