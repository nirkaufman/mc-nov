import React, {useState} from 'react';

export const AuthContext = React.createContext(null);

const Auth = ({ children }) => {
  const [currentUser, setCurrentUser ] = useState(null);

  return (
      <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
        {children(currentUser)}
      </AuthContext.Provider>
  );
};

export default Auth;
