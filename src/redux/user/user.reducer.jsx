import UserActionTypes from './user.types';
const INITIAL_STATE={
    currentUser:null,
    error:null
}
const userReducer = (state= INITIAL_STATE,action)=>{
switch(action.type){
<<<<<<< HEAD
case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
    return {
        ...state,
        currentUser: action.payload,
        error:null
    }

case UserActionTypes.GOOGLE_SIGN_IN_FAILURE:
case UserActionTypes.EMAIL_SIGN_IN_FAILURE:
    return {
        ...state,
        error: action.payload
=======
case UserActionTypes.SIGN_IN_SUCCESS:
    return {
        ...state,
        currentUser:action.payload,
        error:null
    }
case UserActionTypes.SIGN_OUT_SUCCESS:
    return {
        ...state,
        currentUser:null,
        error:null
    }
    
case UserActionTypes.SIGN_IN_FAILURE:
case UserActionTypes.SIGN_OUT_FAILURE:
case UserActionTypes.SIGN_UP_FAILURE:
    return {
        ...state,
        error:action.payload
>>>>>>> 74fd42155f3f66127f22c34e4755e0e36fc9c516
    }
default:
    return state;
}

}
export default userReducer;