
import { initializeApp } from "firebase/app";

import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged, signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import { useStateValue } from "./Stateprovider.js";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId
};

// Initialize Firebase
 initializeApp(firebaseConfig);
const auth=getAuth();
export function signUp(email,password){
  return createUserWithEmailAndPassword(auth,email,password)

}
export function signIn(email,password){
  return signInWithEmailAndPassword(auth, email, password)

}
export function logOut(){

    return signOut(auth)


}
export function useAuth(){
  const [currentuser,setCurrentuser ]=useState();
  const [{user},dispatch]=useStateValue()
  useEffect(()=>{
    const user=onAuthStateChanged(auth,user=>setCurrentuser(user))
    if(user){
      dispatch({
        type:"SET_USER",
        user:user
      })
    }else{
      dispatch({
        type:"SET_USER",
        user:null
      })
    }
  },[])
  return currentuser;
}
