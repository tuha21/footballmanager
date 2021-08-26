import { SET_PLAYER_FORM } from "../../../constant/const";

const playerForm = {
        nation: "Brazil",
        born: "1987-06-24 00:00:00",
        rate: 3,
        sal: 71000000,
        avt: "neymar.jpg",
        status: 1,
        club: {
            std: "Parc des Princes",
            loc: "FRANCE",
            mgr: "Mauricio Pochettino",
            logo: "psg.jpg",
            fded: "1970-08-12 00:00:00",
            cname: "Paris Saint-Germain",
            fder: "Nasser Al-Khelaifi",
            cid: 2
        },
        pid: 5,
        pname: "Neymar",
        pnum: 9
}

var myReducer = (state = playerForm, action) => {
    switch(action.type) {
        case SET_PLAYER_FORM: {
            return action.player
        }
        default: return state;
    }
}

export default myReducer