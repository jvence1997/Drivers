import axios from 'axios'

export const GET_DRIVERS = 'GET_DRIVERS'
export const GET_BY_NAME = 'GET_BY_NAME'
export const GET_BY_ID = 'GET_BY_ID'
export const GET_ALL_TEAMS = 'GET_ALL_TEAMS'
export const GET_ORDER = "GET_ORDER"
export const GET_ORDER_INVERT = "GET_ORDER_INVERT"
export const ORDER_BY_FECHA = 'ORDER_BY_FECHA'
export const GET_BY_DATA_BASE = 'GET_BY_DATA_BASE'
export const GET_BY_API = 'GET_BY_API'
export const GET_BY_TEAMS = 'GET_BY_TEAMS'

export const getAllDrivers = () => {
    return async dispatch => {
        const DriversData = await axios.get('http://localhost:3001/drivers')
        const drivers = DriversData.data
        dispatch({ type: GET_DRIVERS, payload: drivers });
    }

}

export const getByName = (name) => {
    name = name.toLowerCase()
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/drivers/?name=${name}`)
        let driver = response.data
        dispatch({ type: GET_BY_NAME, payload: driver });
    }
}

export const getById = (id) => {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/drivers/${id}`)
        const driver = response.data
        dispatch({ type: GET_BY_ID, payload: driver });
    }
}

export const getAllTeams = () => {
    return async dispatch => {
        const TeamsData = await axios.get('http://localhost:3001/teams')
        const teams = TeamsData.data
        dispatch({ type: GET_ALL_TEAMS, payload: teams });
    }
}
//----------------------------------------------------------------------


export const getDriversInOrder = () => {
    return async dispatch => {
        const DriversData = await axios.get('http://localhost:3001/drivers')
        const drivers = DriversData.data
        drivers.sort((a, b) => a.name.forename.localeCompare(b.name.forename))
        dispatch({ type: GET_ORDER, payload: drivers });
    }
}

export const getDriversInOrderInvert = () => {
    return async dispatch => {
        const DriversData = await axios.get('http://localhost:3001/drivers')
        const drivers = DriversData.data
        drivers.sort((a, b) => b.name.forename.localeCompare(a.name.forename))
        dispatch({ type: GET_ORDER_INVERT, payload: drivers });
    }
}

export const OrderByFecha = () => {
    return async dispatch => {
        const DriversData = await axios.get('http://localhost:3001/drivers')
        const drivers = DriversData.data
        drivers.sort((a, b) => (a.dob > b.dob ? 1 : a.dob < b.dob ? -1 : 0))
        console.log(drivers);
        dispatch({ type: ORDER_BY_FECHA, payload: drivers });
    }
}

export const getByDataBase = () => {
    return async dispatch => {
        const DriversData = await axios.get('http://localhost:3001/drivers')
        const drivers = DriversData.data
        const driversStringId = drivers.filter(driver => typeof driver.id === 'string')

        dispatch({ type: GET_BY_DATA_BASE, payload: driversStringId });
    }
}

export const getByApi = () => {
    return async dispatch => {
        const DriversData = await axios.get('http://localhost:3001/drivers')
        const drivers = DriversData.data
        const driversStringId = drivers.filter(driver => typeof driver.id === 'number')

        dispatch({ type: GET_BY_API, payload: driversStringId });
    }
}

export const getByTeams = (team) => {
    return async dispatch => {
       const DriversData = await axios.get('http://localhost:3001/drivers')
       const drivers = DriversData.data
        const driverTeam = drivers.filter(t => { 
            const teamsArray = t.teams && t.teams.split(",") // utilizo el operador logico && para determinar que la propiedad teams existe
            return teamsArray && teamsArray.includes(team);
        })

       console.log(typeof driverTeam)
        dispatch({ type: GET_BY_TEAMS, payload: driverTeam });
    }
}





