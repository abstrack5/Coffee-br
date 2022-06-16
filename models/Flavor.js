const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Flavor extends Model {}

Flavor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscore: true,
    modelName: "flavor",
  }
);

module.exports = Flavor;
