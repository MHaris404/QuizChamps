import { GET_SCORES123, GET_SCORES4567 } from "../actions/types";

const INITIAL_STATE = {
    infoTopScores123: null,
    infoTopScores4567: null
};

export default topScoresReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_SCORES123:
            return {
                ...state,
                infoTopScores123: action.payload
            }
        case GET_SCORES4567:
            return {
                ...state,
                infoTopScores4567: action.payload
            }
        default:
            return state;
    }
}