import {LOGIN_ACTION_KEY} from '../constant';


const initial_state = {
    email:"",
    userDetails : {}
}

const saveState = (state) => {
    localStorage.setItem('email',JSON.stringify(state.email))
    return state
}
const LoginReducer = (state = initial_state,action) => {
    switch(action.type){
        case LOGIN_ACTION_KEY:
            return saveState({ 
                ...state,
                email: action.payload
            })
        default:
            return state
    }
}

export default LoginReducer;