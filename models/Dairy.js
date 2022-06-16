const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Dairy extends Model {}

Dairy.init(
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
    modelName: "dairy",
  }
);

module.exports = Dairy;
