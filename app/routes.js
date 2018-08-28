
const config = require("../config");

module.exports = function(app, passport) {

  app.get("/", function(req, res) {
    res.render("index.ejs");
  });

  app.get("/profile", isLoggedIn, function(req, res) {
    res.render("profile.ejs", { user : req.user });
  });

  app.get("/logout", isLoggedIn, function(req, res) {
    const id_token_hint = req.user.qrypto.id_token;
    const encodedCallbackUri = encodeURIComponent(config.callbackRoot);
    req.logout();
    req.session.destroy();
    res.redirect(`${config.opUri}/op/session/end?post_logout_redirect_uri=${encodedCallbackUri}&id_token_hint=${id_token_hint}`);    // trailing / causes issues when there are additional parameters (?)
  });

  app.get("/auth/qrypto", passport.authenticate("openidconnect", { scope : ["profile", "email"] }));

  app.get("/auth/qrypto/callback", (req, res, next) => {
    passport.authenticate("openidconnect", (err, user, info) => {
      if (err) return next(err);
      if (!user) return res.redirect("/");
      req.logIn(user, (err) => {
        if (err) return next(err);
        return res.redirect("/profile");
      });
    })(req, res, next);
  });

};

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/");
}
