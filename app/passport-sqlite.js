
const OpenIdConnectStrategy = require("passport-openidconnect").Strategy;
const User = require("../app/models/user-sqlite");
const config = require("../config");

module.exports = function(passport) {

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User
      .findById(id)
      .then(user => done(null, user))
      .catch(error => done(error))
    ;
  });

  passport.use(new OpenIdConnectStrategy(

    config.qryptoAuth,

    (req, iss, sub, profile, jwtClaims, accessToken, refreshToken, params, done) => {

      process.nextTick(() => {

        if (!req.user) {                                                                   // if not already logged in, log in ...
          User
            .findOrCreate({ where: { qrypto_id: profile.id }, defaults: { qrypto_id_token: params.id_token }})
            .then(result => {
              return done(null, result[0]);
            })
            .catch(error => {
              return done(err);
            })
          ;
        }
/*
        else {
          const user = req.user;
          user.qrypto_id_token = params.id_token
          user
            .save({ fields: [ "qrypto_id_token" ] })
            .then(() => done(null, user))
            .catch((error) => done(error))
          ;
        }
*/
      });

    }

  ));

};
