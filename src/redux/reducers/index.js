import { combineReducers } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from 'redux-persist';

import userReducer from "./userReducer";
import catReducer from "./catReducer";
import quesReducer from './quesReducer'
import selecttionReducer from "./selecttionReducer";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['userState', 'catState', 'quesState', 'selectState']
}

const rootReducer = combineReducers({
    userState: userReducer,
    catState: catReducer,
    quesState: quesReducer,
    selectState: selecttionReducer
});

export default persistReducer(persistConfig, rootReducer);