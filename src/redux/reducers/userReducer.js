import { LOG_IN_USER, LOG_OUT_USER } from "../actions/types";

const INITIAL_STATE = {
    infoUser: null
};

export default userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOG_IN_USER:
            return {
                ...state,
                infoUser: action.payload
            }
        case LOG_OUT_USER:
            return {
                ...state,
                infoUser: null
            }
        default:
            return state;
    }
}