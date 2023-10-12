const { Router } = require('express')
const teamRouter = Router()
const {TeamHandler} = require('../handlers/teamsHandler')

teamRouter.get('/', TeamHandler)

module.exports = { teamRouter };