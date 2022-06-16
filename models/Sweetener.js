const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Sweetener extends Model {}

Sweetener.init(
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
    modelName: "sweetener",
  }
);

module.exports = Sweetener;
