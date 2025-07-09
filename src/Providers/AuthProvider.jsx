import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loding, setLoding] = useState(true);

   const createUser = (email, password) => {
      setLoding(true)
      return createUserWithEmailAndPassword(auth, email, password)
   }
   const signIn = (email, password) => {
      setLoding(true)
      return signInWithEmailAndPassword(auth, email, password)
   }
   const userSignOut = () => {
      setLoding(true);
      return signOut(auth)
   }
   const updateUserData = (name, photoURL) => {
      return updateProfile(auth.currentUser, {
         displayName: name,
         photoURL: photoURL,
      })
   }

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
         if (currentUser) {
            setLoding(false)
            setUser(currentUser);
            console.log("user=====>", currentUser)
         } else {
            setLoding(false)
            setUser(null)
            console.log("User SignOut")
         }
      });
      return () => unsubscribe();
   }, []);


   const authData = {
      user,
      loding,
      createUser,
      signIn,
      userSignOut,
      updateUserData,
   }
   return (
      <AuthContext.Provider value={authData}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;