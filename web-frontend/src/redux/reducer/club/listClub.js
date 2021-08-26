import { CREATE_NEW_CLUB, DELETE_CLUB, SET_LIST_CLUB, UPDATE_CLUB } from "../../../constant/const";

const listClub = [];

var myReducer = (state = listClub, action) => {
    switch(action.type) {
        case SET_LIST_CLUB: {
            return action.listClub
        }
        case CREATE_NEW_CLUB: {
            return [...state, action.newClub]
        }
        case UPDATE_CLUB: {
            return [...state].map(club => {
                return action.club.cid === club.cid ? action.club : club 
            })
        }
        case DELETE_CLUB: {
            return [...state].filter(club => {
                return action.club.id !== club.cid
            })
        }
        default : return state
    }
}

export default myReducer