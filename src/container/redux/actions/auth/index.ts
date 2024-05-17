import { START_LOADING } from "../../action-types"

export const loginApi = (loginBody:any,callBack:Function) => async(dispatch:(args:{type:any,payload?:any})=>void)=>{
dispatch({type:START_LOADING})
try {
    callBack(true)
} catch (error) {
    
}
}