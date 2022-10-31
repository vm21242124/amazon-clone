// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged, signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import { useStateValue } from "./Stateprovider.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
 const app=initializeApp(firebaseConfig);
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
