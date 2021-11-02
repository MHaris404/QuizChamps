import axios from 'axios'
import { ToastAndroid } from "react-native";

import {
    GET_CATEGORY, GET_QUESTION, GET_SCORE_USER, IP, GET_SCORES123, GET_SCORES4567
} from './types'

const funcGETCat = (Authtoken) => {
    return async (dispatch) => {

        const api = "http://" + IP + ":5000/endpoint/v1/get/category/all";

        try {
            let catResponse = await axios.get(api, { headers: { "Authorization": `Bearer ${Authtoken}` } });
            if (catResponse.data[0].status) {
                dispatch({
                    type: GET_CATEGORY,
                    payload: catResponse.data[0]
                });
            } else {
                ToastAndroid.show(response.data.message, ToastAndroid.LONG)
            }

        } catch (error) {
            console.error(error);
        }

    }
}

const funcGETQues = (Authtoken, catID) => {
    return async (dispatch) => {

        const api = `http://${IP}:5000/endpoint/v1/get/question?categoryid=${catID}`;

        try {
            let quesResponse = await axios.get(api, { headers: { "Authorization": `Bearer ${Authtoken}` } });
            if (quesResponse.data[0].status) {
                dispatch({
                    type: GET_QUESTION,
                    payload: quesResponse.data[0]
                });
            } else {
                ToastAndroid.show(quesResponse.data.message, ToastAndroid.LONG)
            }

        } catch (error) {
            console.error(error);
        }

    }
}

const funcGETScorebyUserid = (Authtoken, userid) => {
    return async (dispatch) => {

        const api = `http://${IP}:5000/endpoint/v1/get/score?userid=${userid}`;
        try {
            let top3scoresRes = await axios.get(api, { headers: { "Authorization": `Bearer ${Authtoken}` } });
            if (top3scoresRes.data[0].status) {
                dispatch({
                    type: GET_SCORE_USER,
                    payload: top3scoresRes.data[0].result
                });
            } else {
                ToastAndroid.show(top3scoresRes.data[0].msg, ToastAndroid.LONG)
            }
        } catch (error) {
            console.error(error);
        }

    }
}

const funcGETScorers123 = (Authtoken) => {
    return async (dispatch) => {

        const api = `http://${IP}:5000/endpoint/v1/get/getScores123`;
        try {
            let res = await axios.get(api, { headers: { "Authorization": `Bearer ${Authtoken}` } });
            console.log(res.data[0])
            if (res.data[0].status) {
                dispatch({
                    type: GET_SCORES123,
                    payload: res.data[0].result
                });
            } else {
                ToastAndroid.show(res.data[0].msg, ToastAndroid.LONG)
            }
        } catch (error) {
            console.error(error);
        }

    }
}

const funcGETScorers4567 = (Authtoken) => {
    return async (dispatch) => {

        const api = `http://${IP}:5000/endpoint/v1/get/getScores4567`;
        try {
            let res = await axios.get(api, { headers: { "Authorization": `Bearer ${Authtoken}` } });
            console.log(res.data[0])
            if (res.data[0]) {
                dispatch({
                    type: GET_SCORES4567,
                    payload: res.data[0].result
                });
            } else {
                ToastAndroid.show(res.data[0].msg, ToastAndroid.LONG)
            }
        } catch (error) {
            console.error(error);
        }

    }
}


export {
    funcGETCat,
    funcGETQues,
    funcGETScorebyUserid,
    funcGETScorers123,
    funcGETScorers4567
};