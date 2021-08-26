import { CREATE_NEW_CLUB, DELETE_CLUB, DELETE_PLAYER, SET_CLUB_FORM, SET_LIST_CLUB, UPDATE_CLUB, UPDATE_PLAYER } from "../../constant/const"

export const setListClub = (listClub) => {
    return {
        type: SET_LIST_CLUB,
        listClub
    }
}

export const setClubForm = club => {
    return {
        type: SET_CLUB_FORM,
        club
    }
}

export const createNewClub = newClub => {
    return {
        type: CREATE_NEW_CLUB,
        newClub
    }
}

export const updateClub = club => {
    return {
        type : UPDATE_CLUB,
        club
    }
}

export const deleteClub = cid => {
    return {
        type: DELETE_CLUB,
        cid
    }
}