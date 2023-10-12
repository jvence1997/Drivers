const { Router } = require('express')
const driverRouter = Router()
const { HandlerId, CreateHandler, HandlerDrivers } = require('../handlers/driversHandler')

driverRouter.get('/', HandlerDrivers)

driverRouter.get('/:id', HandlerId)

driverRouter.post('/', CreateHandler)

module.exports = { driverRouter };
