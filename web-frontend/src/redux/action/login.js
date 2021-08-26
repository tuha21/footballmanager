import {SET_IS_LOGIN} from "../../constant/const"

export const setIsLogin = isLogin => {
    return {
        type: SET_IS_LOGIN,
        isLogin
    }
}