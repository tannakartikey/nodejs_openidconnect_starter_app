
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const schema = mongoose.Schema({
    qrypto_id: String,
    qrypto_id_token: String
});

module.exports = mongoose.model("User", schema);
