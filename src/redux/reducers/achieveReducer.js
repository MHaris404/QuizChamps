import { GET_SCORE_USER } from "../actions/types";

const INITIAL_STATE = {
    infoAchieve: null
};

export default achieveReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_SCORE_USER:
            return {
                ...state,
                infoAchieve: action.payload
            }
        default:
            return state;
    }
}