const router = require("express").Router();

const apiRoutes = require('./api')
const homeRoutes = require('./home-routes');
const homepageRoutes = require('./homepage-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/homepage', homepageRoutes);



module.exports = router;
