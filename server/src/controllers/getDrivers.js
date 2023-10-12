const axios = require('axios')
const { Driver } = require('../db.js');
const { json } = require('sequelize');
const IMAGE_DEFAULT = 'https://www.autolist.com/assets/listings/default_car.jpg';

const GetAllDrivers = async () => {
    //Utilizando el metodo .findAll() de sequelize recorro todos los drivers de la base de datos.
    const DBdata = await Driver.findAll()
    //utilizando axios realizo un get a la api obteniendo asi todos los drivers
    const apiData = (await axios.get('http://localhost:5000/drivers')).data
        
    for (let driver of apiData) {
        if (driver.image.url.length===0) {
            driver.image.url = IMAGE_DEFAULT
        }
    }
    //devulvo una array con la copia de las dos peticiones obtenidas.
    return [
        ...DBdata,
        ...apiData]
};

//------------------------------------------------------------------------

const GetDriversByName = async (name) => {
    let primeraLetra = name.charAt(0)// obtengo la primera letra de la palabra
    let mayus = primeraLetra.toUpperCase();//la transformo en mayuscula
    let resto = name.slice(1)//obtengo el resto del string
    let Name = mayus + resto// unifico todo el una palbra
//Recien ahi con la palabra ya editada hago la busqueda

//utilizando el metodo findAll con su propiedad whare puedo hacer la busqueda por el nombre
    const DBdata = await Driver.findAll({ whare: { name: Name } })
//utilizando axios realizo un get a la api obteniendo asi todos los drivers
    const apiData = (await axios.get(`http://localhost:5000/drivers/?name.forename=${Name}`))
        .data.slice(0, 15) //
//con el metodo de javaScript .slice() limito la busqueda solo hasta 15 drivers
    if (DBdata.length == 0 && apiData.length == 0) {
        throw Error('the driver is not defined')
    }

    return [
        ...DBdata,
        ...apiData
    ]
  
}
module.exports = {
    GetAllDrivers,
    GetDriversByName
}