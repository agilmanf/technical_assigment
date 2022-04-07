const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("ta_sequelize", "root", "admin123", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
