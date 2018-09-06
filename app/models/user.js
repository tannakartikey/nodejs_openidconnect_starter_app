
const Sequelize = require("sequelize");
const sequelize = new Sequelize("sqlite:db/initech.db");

const User = sequelize.define(
  "user",
  {
    qrypto_id: { type: Sequelize.STRING, allowNull: false },
    qrypto_id_token: { type: Sequelize.STRING, allowNull: false }
  },
  {
    timestamps: false
  }
);

module.exports = User;
