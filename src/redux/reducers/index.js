import { combineReducers } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from 'redux-persist';

import userReducer from "./userReducer";
import catReducer from "./catReducer";
import quesReducer from './quesReducer'
import selecttionReducer from "./selecttionReducer";
import achieveReducer from "./achieveReducer";
import topScoreReducer from "./topScoreReducer";
import loadingReducer from "./loadingReducer";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['userState', 'catState', 'quesState', 'selectState', 'achieveReducer', 'scoreState']
}

const rootReducer = combineReducers({
    userState: userReducer,
    catState: catReducer,
    quesState: quesReducer,
    selectState: selecttionReducer,
    achieveState: achieveReducer,
    scoreState: topScoreReducer,
    loadState: loadingReducer
});

export default persistReducer(persistConfig, rootReducer);