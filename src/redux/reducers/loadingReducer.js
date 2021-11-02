import { END_LOADING, GET_QUESTION, START_LOADING } from "../actions/types";

const INITIAL_STATE = {
    infoLoading: null
};

export default loadingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case START_LOADING:
            return {
                ...state,
                infoLoading: true,
            };

        case END_LOADING:
            return {
                ...state,
                infoLoading: false,
            };

        default:
            return state;
    }
}