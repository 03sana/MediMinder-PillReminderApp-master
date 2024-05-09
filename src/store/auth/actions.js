import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from '@firebase/auth';
import {auth} from '../../firebase';
import { setUser } from '../user/reducers';
import { setIsLogedIn } from './reducers';


export async function login(dispatch,paylod){
    const {email,password} = paylod;
    const user = await signInWithEmailAndPassword(auth, email, password);
    dispatch(setUser(user));
    return user;
}

export async function signup(dispatch,paylod){
    const {email,password} = paylod;
    const user = await createUserWithEmailAndPassword(auth, email, password);
    dispatch(setUser(user));
    return user;
}

export async function logout(dispatch){
    await signOut(auth);
    dispatch(setIsLogedIn(false));
    return true;
}
