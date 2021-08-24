import { combineReducers } from 'redux';
import listPlayer from "./player/listPlayer"
import playerForm from "./player/playerForm"
import isLogin from "./login/isLogin"
var myReducer = combineReducers({
    listPlayer,
    playerForm,
    isLogin
});

export default myReducer