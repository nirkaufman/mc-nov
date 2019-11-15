import {useContext} from 'react';

import {AuthContext} from "../providers/Auth";


export function useAuth() {
  const {setCurrentUser} = useContext(AuthContext);

  const signIn = (newUser) => {
    //sign in with the server
    console.log('Signed in:', newUser);
    setCurrentUser(newUser)
  };

  const signOut = () => {
    // signOut from the server
    setCurrentUser(null);
  };

  return {signIn, signOut}
}
