
import { initializeApp } from "firebase/app";

import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged, signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import { useStateValue } from "./Stateprovider.js";

const firebaseConfig = {
  apiKey: "AIzaSyApqT3BKIWWcBgkfQuqdUq_YTonK_dlcz8",
  authDomain: "clone-725ed.firebaseapp.com",
  projectId: "clone-725ed",
  storageBucket: "clone-725ed.appspot.com",
  messagingSenderId: "415877903552",
  appId: "1:415877903552:web:40ff05934544bd1eed2925",
  measurementId: "G-3HE25R6MRZ"
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
