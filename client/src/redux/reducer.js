import {
    GET_DRIVERS,
    GET_BY_NAME,
    GET_BY_ID,
    GET_ALL_TEAMS,
    GET_ORDER,
    GET_ORDER_INVERT,
    ORDER_BY_FECHA,
    GET_BY_DATA_BASE,
    GET_BY_API,
    GET_BY_TEAMS,
} from "./action"

const initialState = {
    allDrivers: [],
    driverDetail: [],
    allTeams: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DRIVERS: return { ...state, allDrivers: action.payload }

        case GET_BY_NAME: return { ...state, allDrivers: action.payload }

        case GET_BY_ID: return { ...state, driverDetail: action.payload }

        case GET_ALL_TEAMS: return { ...state, allTeams: action.payload }

        case GET_ORDER: return { ...state, allDrivers: action.payload }

        case GET_ORDER_INVERT: return { ...state, allDrivers: action.payload }

        case ORDER_BY_FECHA: return { ...state, allDrivers: action.payload }

        case GET_BY_DATA_BASE: return { ...state, allDrivers: action.payload }

        case GET_BY_API: return { ...state, allDrivers: action.payload }

        case GET_BY_TEAMS: return { ...state, allDrivers: action.payload }

        default: return { ...state };
    }
}

export default rootReducer