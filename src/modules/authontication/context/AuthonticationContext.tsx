import { jwtDecode } from 'jwt-decode';
import React, { createContext, useEffect, useState } from 'react';
type Props = {
  children: React.ReactNode;
};
type state = {
  token: string | null;
};
const AuthContext = createContext(null);
export default function AuthonticationContext(props: Props) {
  const [LoginData, SetLoginData] = useState<state>();
  const SaveToken = () => {
    // save token to local storage
    const DataToken = localStorage.getItem('token');
    if (DataToken) {
      const DecodeToken = jwtDecode(DataToken);
      SetLoginData(DecodeToken);
      // SetLoginData({ token: '123456' });
    }
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      SaveToken();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ LoginData, SetLoginData }}>
      {props.children}
    </AuthContext.Provider>
  );
}
