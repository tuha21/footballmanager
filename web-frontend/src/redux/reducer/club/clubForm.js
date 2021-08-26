import { SET_CLUB_FORM } from "../../../constant/const"

const clubForm = {
    std: "",
    loc: "",
    mgr: "",
    pres: "",
    logo: "",
    cname: "",
    cid: -1,
    fder: "",
    fded: "1987-06-24 00:00:00"
}

var myReducer = (state = clubForm, action) => {
    switch(action.type) {
        case SET_CLUB_FORM: {
            return action.club
        }
        default: return state;
    }
}

export default myReducer;