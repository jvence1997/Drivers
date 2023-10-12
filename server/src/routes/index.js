const { Router } = require("express");
const router = Router();
const {driverRouter}= require('./routeDrivers')
const { teamRouter } = require('./routerTeam')

router.use('/drivers', driverRouter)
router.use('/teams', teamRouter)

module.exports = router;
