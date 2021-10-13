import { CAT_ID, QUES_ID, OPT_ID } from "../actions/types";

const INITIAL_STATE = {
    catInfo: null,
    quesInfo: null,
    optInfo: null
};

export default selectionReducer = (state = INITIAL_STATE, action) => {
    
    switch (action.type) {
        case CAT_ID:
            return {
                ...state,
                catInfo: action.payload
            }
        case QUES_ID:
            return {
                ...state,
                quesInfo: action.payload
            }
        case OPT_ID:
            return {
                ...state,
                optInfo: action.payload
            }
        default:
            return state;
    }
}