import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import jitServer from '../api/jitServerLink';
import { navigate } from '../navigationRef';

const authReducer = (state, action)=>{
    switch(action.type){
        case 'add_error':
            return {...state, errorMessage: action.payload};
        case 'signin':
            return {errorMessage: '', token: action.payload};
        case 'signout':
            return {token: null};
        case 'clrErrMsg':
            return {errorMessage: ''};
        default:
            return state;
    }
}

const signup = dispatch => async({email, password})=>{
    try{
        const response = await jitServer.post('/signup', {email, password});
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token});
        navigate('Home');
    }catch(err){
        dispatch({ type: 'add_error', payload: `Oops. Something went wrong...`})
    }
}

const signin = dispatch => async({email, password})=>{
    try{
        const response = await jitServer.post('/signin', {email, password});
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token});
        navigate('Home')
    }catch(err){
        dispatch({ type: 'add_error', payload: `Oops. Something went wrong...`})
    }
}

const signout = dispatch => async()=>{
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout'})
    navigate('loginflow')
}

const clrErrMsg = dispatch =>()=>{
    dispatch({ type: 'clrErrMsg'});
}

const localLogin = dispatch => async()=>{
   const token = await AsyncStorage.getItem('token');
    if(token){
        dispatch({ type: 'signin', payload: token});
        navigate('Home')
    }else{
        navigate('loginflow');
    }
}

export const {Context, Provider} = createDataContext(
    authReducer,
    {signup, signin, signout, clrErrMsg, localLogin},
    {token: null, errorMessage: ''}
)