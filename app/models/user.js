
const mongoose = require("mongoose");
const bcrypt   = require("bcrypt-nodejs");

mongoose.Promise = global.Promise;

var userSchema = mongoose.Schema({

    qrypto           : {
        id           : String,
        id_token     : String
    }

});

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model("User", userSchema);
