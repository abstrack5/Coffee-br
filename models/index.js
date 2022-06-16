const Employee = require('./Employee');
const Coffee = require('./Coffee');
const Dairy = require('./Dairy');
const Flavor = require('./Flavor');
const Sweetener = require('./Sweetener');
const Order = require('./Order');


Employee.hasMany(Order, {
  foreignKey: 'employee_id'
});

Order.belongsTo(Employee, {
  foreignKey: 'employee_id',
  onDelete: 'SET NULL'
});

Coffee.belongsTo(Order, {
  foreignKey: 'coffee_base',
  onDelete: 'SET NULL'
});

Dairy.belongsTo(Order, {
  foreignKey: 'dairy_type',
  onDelete: 'SET NULL'
});

Flavor.belongsTo(Order, {
  foreignKey: 'flavor_type',
  onDelete: 'SET NULL'
});

Sweetener.belongsTo(Order, {
  foreignKey: 'sweetener_type',
  onDelete: 'SET NULL'
});

module.exports = { Employee, Coffee, Dairy, Flavor, Sweetener, Order };