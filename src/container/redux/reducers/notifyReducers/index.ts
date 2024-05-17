import { IS_NOTIFY, NOTIFY_MESSAGE, NOTIFY_TYPE } from "../../action-types"

const initialState = {
    isNotify:false,
    notifyType:'',
    notifyMessage:'',
}
export const notifyReducer:any = (state=initialState,action:{type:any,payload:any})=>{
switch(action.type){
    case IS_NOTIFY: {
        return {
          ...state,
          isNotify: action.payload
        }
      }
      case NOTIFY_MESSAGE: {
          return {
            ...state,
            notifyMessage: action.payload
          }
        }
        case NOTIFY_TYPE: {
          return {
            ...state,
            notifyType: action.payload
          }
        }
      default: {
        return { ...state };
      }
}
}
