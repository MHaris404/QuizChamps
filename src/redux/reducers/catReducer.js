import { GET_CATEGORY, GET_QUESTION, GET_OPTION } from "../actions/types";

const INITIAL_STATE = {
    infoCat: null
};

export default catReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CATEGORY:
            return {
                ...state,
                infoCat: action.payload
            }

        default:
            return state;
    }
}