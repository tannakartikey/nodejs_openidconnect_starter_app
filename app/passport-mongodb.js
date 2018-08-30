
const OpenIdConnectStrategy = require("passport-openidconnect").Strategy;
const User = require("../app/models/user-mongodb");
const config = require("../config");

module.exports = function(passport) {

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use(new OpenIdConnectStrategy(

    config.qryptoAuth,

    (req, iss, sub, profile, jwtClaims, accessToken, refreshToken, params, done) => {

      process.nextTick(() => {

        if (!req.user) {                                                                                        // if not already logged in, log in ...
          User.findOne({ "qrypto_id" : profile.id }, (err, user) => {
            if (err) return done(err);
            if (user) {
              user.qrypto_id_token = params.id_token;
              user.save(function(err) {
                if (err) return done(err);
                return done(null, user);
              });
            }
            else {
              var newUser = new User();
              newUser.qrypto_id = profile.id;
              newUser.qrypto_id_token = params.id_token;
              newUser.save(function(err) {
                if (err) return done(err);
                return done(null, newUser);
              });
            }
          });
        }

        else {                                                                                                  // ... otherwise (already logged in), link
          var user = req.user;
          user.qrypto_id = profile.id;
          user.qrypto_id_token = params.id_token;
          user.save((err) => {
            if (err) return done(err);
            return done(null, user);
          });
        }

      });

    }

  ));

};
