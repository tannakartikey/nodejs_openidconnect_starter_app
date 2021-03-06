# NodeJS + Express OpenID Connect with Ultra Auth server

- This is a sample NodeJS app that uses OpenID Connect with the Ultra Auth identity server.
- This app also serves as a basic blueprint for interaction with your apps for development.  

## Create a Ultra Auth Application

1. Sign up for [`Ultra Auth`](https://www.ultraauth.com/users/sign_up)
2. Log into Ultra Auth Dashboard
3. Create a new application from the Create Applications tab

With your application provisioned, you will have the necessary `OPENID_CLIENT_ID` and `OPENID_CLIENT_SECRET` to launch the sample application. Here is an example setup for your Heroku ENV:

```sh
OPENID_CLIENT_ID: 0d2ee26a-e0d6-4b91-aded-1ef0618f62c2 
OPENID_CLIENT_SECRET: dvEJSuG3Y8DYS/hcaxEKigYK25WeYCOgxCJLDH3EpH/vUI1X1hzSErDlNfLID9aP  
OPENID_ISSUER: https://srv.qryp.to/op
DOMAIN_URL: https://nodejs-sample.herokuapp.com
```

## Deploy Sample Application

Heroku is the fastest way to get the sample app running.

### Single Click Heroku Deployment

1. Deploy by clicking button below:<br/><br/>[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/UltraAuth/nodejs_openidconnect_starter_app)

2. Update `OPENID_CLIENT_ID` and `OPENID_CLIENT_SECRET` environment vars with you with those you provisioned in the Ultra Auth dashboard.

### Manual Heroku Deployment

To experiment with making edits to the sample application:

1. Clone sample application locally

```sh
git clone https://github.com/UltraAuth/nodejs_openidconnect_starter_app
cd nodejs_openidconnect_starter_app
```

2. Create Heroku Application:

```sh
heroku create --app deauthorized-nodejs-sample
git config --list | grep heroku
git push heroku master
```

3. Make your code updates in [`config.js`](https://github.com/UltraAuth/nodejs_openidconnect_starter_app/blob/master/config.js)

```sh
git commit -m 'small update to sample app'
git push heroku master
heroku open
```

4. Run the app locally with the latest Node Version 10 or higher.

```sh
npm install
node app
```

## Documentation

For more information on using Ultra Auth's biometric authentication solutions, [visit our website](https://www.ultraauth.com)
