const axios = require('axios')
const { Driver } = require('../db')

const GetDriverById = async (id) => {
    //itilizando el metodo isNaN() defino si el id es numerico o no dependiendo de 
    //eso realizo una peticion a la api o a la base de datos y devuelvo un nuevo arreglo con los datos obtenidos
    if (isNaN(id)) {
        const driverDb = await Driver.findByPk(id)
        return [
            driverDb
        ]
    }
    else {
        const driverApi = (await axios.get(`http://localhost:5000/drivers/${id}`)).data
        return [
            driverApi
        ]
    }
    
    
}

module.exports = { GetDriverById }