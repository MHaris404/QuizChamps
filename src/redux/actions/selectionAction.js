import axios from 'axios'
import { ToastAndroid } from "react-native";

import {
    CAT_ID, QUES_ID, OPT_ID, IP, USER_CATEGORY_SCORE
} from './types'

const funcCATID = (item) => {
    return async (dispatch) => {
        dispatch({
            type: CAT_ID,
            payload: item
        })
    }
}

const funcQUESID = (id) => {
    return async (dispatch) => {
        dispatch({
            type: QUES_ID,
            payload: id
        })
    }
}

const funcOPT = (arr) => {
    return async (dispatch) => {
        dispatch({
            type: OPT_ID,
            payload: arr
        })
    }
}

const funcPOSTSCORECAT = (Authtoken, userid, catId, score) => {
    return async (dispatch) => {

        const api = `http://192.168.1.103:5000/endpoint/v1/add/score?userCategoryScore=${score}&categoryid=${catId}&usersid=${userid}`;

        try {
            fetch(api, {
                method: 'POST',
                headers: {
                    "Authorization": `Bearer ${Authtoken}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            })
                .then((catResponse) => catResponse.json())
                .then((catResponse) => {
                    if (catResponse[0].status) {
                        dispatch({
                            type: USER_CATEGORY_SCORE,
                        });
                    } else {
                        ToastAndroid.show(catResponse.msg, ToastAndroid.LONG)
                    }
                })
                .catch((error) => { console.error("What went wrong : " + error); });

        } catch (error) {
            console.error(error);
        }

    }
}

export {
    funcCATID,
    funcQUESID,
    funcOPT,
    funcPOSTSCORECAT
};