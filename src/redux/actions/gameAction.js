import axios from 'axios'
import { ToastAndroid } from "react-native";

import {
    GET_CATEGORY, GET_QUESTION, GET_OPTION, IP
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


export {
    funcGETCat,
    funcGETQues,
};