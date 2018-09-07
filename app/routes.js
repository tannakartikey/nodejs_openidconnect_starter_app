
const config = require("../config");

module.exports = (app, passport) => {

  app.get("/", (req, res) => {
    res.render("index.ejs");
  });

  app.get("/profile", isLoggedIn, (req, res) => {
    res.render("profile.ejs", { user : req.user });
  });

  app.get("/logout", isLoggedIn, async (req, res) => {
    const id_token_hint = req.user.qrypto_id_token;
    const encodedCallbackUri = encodeURIComponent(config.callbackRoot);
    await req.user.update({ qrypto_id_token: null });
    req.logout();
    req.session.destroy();
    res.redirect(`${config.issuer}/session/end?post_logout_redirect_uri=${encodedCallbackUri}&id_token_hint=${id_token_hint}`);    // trailing / causes issues when there are additional parameters (?)
  });

  app.get("/auth/qrypto", passport.authenticate("openidconnect", { scope : ["profile", "email"] }));

  app.get("/auth/qrypto/callback", (req, res, next) => {
    passport.authenticate("openidconnect", (error, user, info) => {
      if (error) return next(error);
      if (!user) return res.redirect("/");
      req.logIn(user, (error) => {
        if (error) return next(error);
        return res.redirect("/profile");
      });
    })(req, res, next);
  });

};

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/");
}
