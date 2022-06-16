const router = require('express').Router();

const employeeRoutes  = require('./employee-routes.js')

router.use('/employees', employeeRoutes);

module.exports = router;
