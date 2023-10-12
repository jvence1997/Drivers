const {GetAllTeams} = require('../controllers/getAllTeams')

const TeamHandler = async (req, res) => {
    const response = await GetAllTeams()
    try {
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { TeamHandler }