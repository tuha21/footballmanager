import { combineReducers } from 'redux';
import listPlayer from "./player/listPlayer"
import playerForm from "./player/playerForm"
import isLogin from "./login/isLogin"
import listClub from "./club/listClub"
import clubForm from "./club/clubForm"
var myReducer = combineReducers({
    listPlayer,
    playerForm,
    isLogin,
    listClub,
    clubForm
});

export default myReducer