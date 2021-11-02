import axios from 'axios'
import { ToastAndroid } from "react-native";

import { END_LOADING, START_LOADING } from './types'

const enLoad = () => {
    return async (dispatch) => {
        dispatch({
            type: START_LOADING,
            payload: true //no need
        })
    }
}

const disLoad = () => {
    return async (dispatch) => {
        dispatch({
            type: END_LOADING,
            payload: false //no need
        })
    }
}

export {
    enLoad,
    disLoad
}