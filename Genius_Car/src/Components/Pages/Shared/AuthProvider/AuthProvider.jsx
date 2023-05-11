import React, { createContext, useEffect, useState } from 'react';
import { getAuth,createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword,onAuthStateChanged,signOut} from "firebase/auth";
import app from '../../../../../Firebase/Firebase_config';

// eslint-disable-next-line react-refresh/only-export-components
export const authdataall=createContext(null);
const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null);
    const[load,setLoad]=useState(true);
    const value1="hello";

//authapp
const auth = getAuth(app);

//resister
const resister=(email,password)=>{
    setLoad(true);

    return createUserWithEmailAndPassword(auth, email, password);

}
//login
const signin=(email,password)=>{
    setLoad(true);

    return signInWithEmailAndPassword(auth, email, password);

}
//updateuser
const upadateprofiles=(name)=>{
 return   updateProfile(auth.currentUser, {
        displayName:name
      })
}
//signout
const logout=()=>{
    signOut(auth).then(() => {
        setUser('')
        
      }).catch((error) => {
       
      });
}

//onauthstate
useEffect(()=>{
   const unsubscribe=onAuthStateChanged(auth, (user) => {
        if (user) {
          
            setUser(user);
            setLoad(false);
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
      return ()=>{
        unsubscribe();
      }
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])
    const useObj={
        value1,resister,upadateprofiles,signin,user,setUser,logout

    }
    return (
        <authdataall.Provider value={useObj}>
{children}
        </authdataall.Provider>
        
        
    );
};

export default AuthProvider;