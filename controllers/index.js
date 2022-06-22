const router = require("express").Router();

const apiRoutes = require('./api')
const homeRoutes = require('./home-routes');
const homepageRoutes = require('./homepage-routes.js');
const neworderRoutes = require('./neworder-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/homepage', homepageRoutes);
router.use('/neworder', neworderRoutes);


module.exports = router;
