
const OpenIdConnectStrategy = require("passport-openidconnect").Strategy;
const User = require("../app/models/user");
const config = require("../config");

module.exports = (passport) => {

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User
      .findById(id)
      .then(user => done(null, user))
      .catch(error => done(error))
    ;
  });

  passport.use(new OpenIdConnectStrategy(

    config.qryptoAuth,

    (req, iss, sub, profile, jwtClaims, accessToken, refreshToken, params, done) => {
      process.nextTick(async () => {
        const user = (!req.user) ? (await User.findOrCreate({ where: { qrypto_id: profile.id }}))[0] : req.user;
        user
          .update({ qrypto_id_token: params.id_token })
          .then(() => done(null, user))
          .catch((error) => done(error))
        ;
      });
    }

  ));

};
