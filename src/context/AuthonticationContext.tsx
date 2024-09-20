import { jwtDecode } from 'jwt-decode';
import { createContext, useEffect, useState } from 'react';
import {
  AuthContextProviderProps,
  AuthContextType,
  UserData,
} from '../Interfaces/UserInfo/UserInfo';

export const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthContextProvider({
  children,
}: AuthContextProviderProps) {
  const [userData, setUserData] = useState<UserData | null>(null);

  const saveUserData = () => {
    // save token to local storage
    const enCodedToken: any = localStorage.getItem('token');
    if (enCodedToken) {
      const deCodedToken: UserData = jwtDecode<UserData>(enCodedToken);
      setUserData(deCodedToken);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      saveUserData();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userData, saveUserData }}>
      {children}
    </AuthContext.Provider>
  );
}
