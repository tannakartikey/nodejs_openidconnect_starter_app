
const crypto = require("crypto");

const config = {};

config.callbackRoot = process.env.DOMAIN_URL

config.client = {
  id: process.env.OPENID_CLIENT_ID,
  secret: process.env.OPENID_CLIENT_SECRET,
  redirectURIs: [ `${config.callbackRoot}/auth/qrypto/callback` ],
  sessionKey: crypto.randomBytes(32).toString("hex"),
  skipUserProfile: false,
  passReqToCallback: true
}

module.exports = config;
