import {
   createUserWithEmailAndPassword,
   FacebookAuthProvider,
   GithubAuthProvider,
   GoogleAuthProvider,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
   updateProfile,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.config';
import useAxiosPublic from '../Hooks/useAxiosPublic';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
   const axiosPublic = useAxiosPublic();
   const googleProvider = new GoogleAuthProvider();
   const facebookProvider = new FacebookAuthProvider();
   facebookProvider.addScope('email');
   const githubProvider = new GithubAuthProvider();
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const signIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   const userSignOut = () => {
      setLoading(true);
      return signOut(auth);
   };

   const updateUserData = (name, photoURL) => {
      return updateProfile(auth.currentUser, {
         displayName: name,
         photoURL: photoURL,
      });
   };

   const googleLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
   };

   const facebookLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, facebookProvider);
   };

   const gitHubLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, githubProvider);
   };

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
         if (currentUser) {
            const userInfo = { email: currentUser.email };
            const { data } = await axiosPublic.post('/jwt', userInfo);
            console.log(data.token);
            setLoading(false);
            setUser(currentUser);

            console.log('user=====>', currentUser);
         } else {
            setLoading(false);
            setUser(null);
            console.log('User SignOut');
         }
      });
      return () => unsubscribe();
   }, []);

   const authData = {
      user,
      loading,
      createUser,
      signIn,
      userSignOut,
      updateUserData,
      googleLogin,
      facebookLogin,
      gitHubLogin,
   };
   return (
      <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
   );
};

export default AuthProvider;
