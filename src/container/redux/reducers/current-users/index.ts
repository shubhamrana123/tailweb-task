import { DELETE_STUDENT_DATA, EDIT_LIST, USERS_LIST, USER_DETAILS } from "../../action-types"

const initialState = {
    userDetails: null,
    usersList:[]
}
export const currentUser:any = (
    state = initialState,
    action: { type: any, payload: any }
) => {
    switch (action.type) {
        case USER_DETAILS: {
            return {
                ...state,
                userDetails: action.payload
            }
        }
        case USERS_LIST: {
            return {
                ...state,
             usersList:[...state.usersList,...action.payload]
            // usersList:action.payload
            }
        }
        case DELETE_STUDENT_DATA: {
            return {
                ...state,
             usersList:action.payload
   
            }
        }
        case EDIT_LIST: {
            return {
                ...state,
                usersList:action.payload

            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}