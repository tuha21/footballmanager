import { CREATE_NEW_PLAYER, DELETE_PLAYER, SET_LIST_PLAYER, UPDATE_PLAYER } from "../../../constant/const";

const listPlayer = [];

const myReducer = (state = listPlayer, action) => {
    switch (action.type) {
        case SET_LIST_PLAYER: {
            return action.listPlayer;
        }
        case CREATE_NEW_PLAYER: {
            return [...state, action.player];
        }
        case DELETE_PLAYER: {
            return [...state].filter(player => {
                return player.pid !== action.playerId
            })
        }
        case UPDATE_PLAYER: {
            return [...state].map(player => {
                return player.pid === action.player.pid ? action.player : player
            })
        }
        default: return state;
    }
}

export default myReducer