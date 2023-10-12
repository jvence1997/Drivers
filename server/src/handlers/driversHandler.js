const { GetAllDrivers, GetDriversByName } = require('../controllers/getDrivers')
const { GetDriverById } = require('../controllers/getDriverById')
const { CreateDriver } = require('../controllers/postDriver')

const HandlerDrivers = async (req, res) => {
    let { name } = req.query;
    try {
        if (name) {
            const driverByName = await GetDriversByName(name);
            return res.status(200).send(driverByName)
        }
        else {
            const allDrivers = await GetAllDrivers();
            return res.status(200).json(allDrivers)
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

const HandlerId = async (req, res) => {
    const { id } = req.params
    try {
        const driver = await GetDriverById(id);
        res.status(200).json(driver)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

const CreateHandler = async (req, res) => {
    const data = req.body
    try {
        const newDriver = await CreateDriver(data)
        res.status(200).json(newDriver)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { HandlerId, CreateHandler, HandlerDrivers }