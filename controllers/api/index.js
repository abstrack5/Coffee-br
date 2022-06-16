const router = require('express').Router();

const employeeRoutes  = require('./employee-routes.js')
const coffeeRoutes  = require('./coffee-routes.js')
const dairyRoutes  = require('./dairy-routes.js')
const sweetenerRoutes  = require('./sweetener-routes.js')
const flavorRoutes  = require('./flavor-routes.js')


router.use('/employees', employeeRoutes);
router.use('/coffees', coffeeRoutes);
router.use('/dairies', dairyRoutes);
router.use('/sweeteners', sweetenerRoutes);
router.use('/flavors', flavorRoutes);


module.exports = router;
