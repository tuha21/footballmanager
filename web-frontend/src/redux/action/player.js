import { CREATE_NEW_PLAYER, DELETE_PLAYER, SET_LIST_PLAYER, SET_PLAYER_FORM, UPDATE_PLAYER } from "../../constant/const"

export const setListPlayer = (listPlayer) => {
    return {
        type: SET_LIST_PLAYER,
        listPlayer
    }
}
export const createNewPlayer = (player) => {
    return {
        type: CREATE_NEW_PLAYER,
        player
    }
}

export const deletePlayer = (playerId) => {
    return {
        type: DELETE_PLAYER,
        playerId
    }
}

export const updatePlayer = (player) => {
    return {
        type: UPDATE_PLAYER,
        player
    }
}

export const setPlayerForm = (player) => {
    return {
        type: SET_PLAYER_FORM,
        player
    }
}