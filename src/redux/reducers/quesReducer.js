import { GET_QUESTION } from "../actions/types";

const INITIAL_STATE = {
    infoQues: null
};

export default quesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case GET_QUESTION:
            return {
                ...state,
                infoQues: action.payload
            }

        default:
            return state;
    }
}