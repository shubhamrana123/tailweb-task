import { LOG_IN, LOG_OUT } from "../../action-types"

const initialState = {
    isSignedIn:false
}
export const authReducers:any = (
  state=initialState,
  action:{type:any,payload:any}
)=>{
    switch(action.type){
        case LOG_OUT :{
            return {
                ...state,
                isSignedIn:false
            }
        }
        case LOG_IN :{
            return {
                ...state,
                isSignedIn:true
            }
        }
        default:{
            return {
                ...state
            }
        }
    }
}