import * as actionTypes from '../constant/constant'

// initial state
const initialState = {
    name:"xiatian"
}

export default function userinfo (state = initialState, action) {
    switch (action.type) {
        case actionTypes.USERINFO_UPDATE:
            return action.data
        default:
            return state
    }
}