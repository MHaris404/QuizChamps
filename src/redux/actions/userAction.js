import axios from 'axios'
import { ToastAndroid } from "react-native";

import {
    LOG_IN_USER, LOG_OUT_USER, IP
} from './types'

const LoginUser = (state) => {
    return async (dispatch) => {

        const api = "http://" + IP + ":5000/endpoint/v1/login";

        try {
            let response = await axios.post(api, { username: state.email, password: state.password }, { withCredentials: true });
            if (response.data.status) {
                ToastAndroid.show(response.data.status.toString(), ToastAndroid.LONG)
                dispatch({
                    type: LOG_IN_USER,
                    payload: response.data
                });

            }
            else {
                console.log(response);
                ToastAndroid.show(response.data.message, ToastAndroid.LONG)
            }

        }
        catch (error) {
            console.log(error);
        }
    }
}

const LogoutUser = () => {
    return async (dispatch) => {

        ToastAndroid.show("Logging Out", ToastAndroid.SHORT);
        const api = "http://" + IP + ":5000/endpoint/v1/isloggedin";

        try {
            const response = await fetch(api);
            const responseJson = await response.json();
            if (responseJson.status) {

                {
                    let api = "http://"+IP+":5000/endpoint/v1/logout";
                    try {
                        fetch(api, {
                            method: 'POST',
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json'
                            },
                        })
                            .then((response) => response.json())
                            .then((responseJson) => {
                                if (responseJson.status) {

                                    ToastAndroid.show("Logout Successful", ToastAndroid.SHORT);

                                    dispatch({
                                        type: LOG_OUT_USER
                                    });

                                } else {
                                    ToastAndroid.show(responseJson.message, ToastAndroid.LONG);
                                }
                            })
                            .catch((error) => { console.error("What went wrong : " + error); });

                    } catch (error) {
                        console.error(error);
                    }
                }

            } else {
                
                ToastAndroid.show("Something went wrong : " + responseJson.message, ToastAndroid.LONG);
            }
        } catch (error) {
            console.error(error);
        }

    }
}

export {
    LoginUser,
    LogoutUser
};