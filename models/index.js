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
});

// Coffee.belongsToMany(Order, {
//   through: Order,
//   foreignKey: 'coffee_base',
// });

// Dairy.belongsToMany(Order, {
//   through: Order,
//   foreignKey: 'dairy_type',
// });

// Flavor.belongsToMany(Order, {
//   through: Order,
//   foreignKey: 'flavor_type',
// });

// Sweetener.belongsToMany(Order, {
//   through: Order,
//   foreignKey: 'sweetener_type',
// });

module.exports = { Employee, Coffee, Dairy, Flavor, Sweetener, Order };