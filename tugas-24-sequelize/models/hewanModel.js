const Sequelize = require("sequelize");
const sequelize = require("../database");

const Hewan = sequelize.define("hewan", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  nama: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  namaSpesies: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  umur: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Hewan;
