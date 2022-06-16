const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

class Order extends Model {}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references : {
        model: "employee",
        key: "id"
      }
    },
    customer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    coffee_base: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "coffee",
        key: "id",
      },
    },
    dairy_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "dairy",
        key: "id",
      },
    },
    sweetener_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "sweetener",
        key: "id",
      },
    },
    flavor_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "flavor",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscore: true,
    modelName: "order",
  }
);

module.exports = Order;
