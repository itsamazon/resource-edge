import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import LoginReducer from './reducers/loginReducer'

const ConfigureStore = () => {
    let preloadedState
    const persistedTodoString = localStorage.getItem('email')
    if(persistedTodoString != null){
        console.log(persistedTodoString)
        preloadedState ={
            login:{email:JSON.parse(persistedTodoString)}
        }
    }
    const rootReducer = combineReducers({
        login: LoginReducer,
    });
    return createStore(rootReducer,preloadedState,applyMiddleware(thunk))
}
export default ConfigureStore;