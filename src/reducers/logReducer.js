import { GET_LOGS, LOGS_ERROR, SET_LOADING, ADD_LOG, DELETE_LOG, SET_CURRENT, CLEAR_CURRENT, UPDATE_LOG, SEARCH_LOGS } from '../actions/types'

const initialState = {
    logs: null,
    error: null,
    loading: false,
    current: null
}

export default (state= initialState, action) => {
    switch(action.type) {
        case SET_LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        case DELETE_LOG: {
            return {
                ...state,
                logs: state.logs.filter(log => action.payload !== log.id),
                loading: false
            }
        }

        case ADD_LOG: {
            return {
                ...state,
                logs: [...state.logs, action.payload],
                loading: false
            }
        }
        case UPDATE_LOG : {
            return {
                ...state,
                logs: state.logs.map(log => log.id === action.payload.id ? action.payload : log)
            }
        }
        case GET_LOGS: {
            return {
                ...state,
                logs: action.payload,
                loading: false
            }
        }
        case SEARCH_LOGS: {
            return {
                ...state,
                logs: action.payload,
                loading: false
            }
        }
        case SET_CURRENT: {
            return {
                ...state,
                current: action.payload
            }
        }
        case CLEAR_CURRENT: {
            return {
                ...state,
                current: null
            }
        }
        case LOGS_ERROR: {
            console.error(action.payload)
            return {
                ...state,
                error: action.payload
            }
        }
        default: 
            return state
    }
}