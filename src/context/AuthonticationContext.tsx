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
    const enCodedToken: any = localStorage.getItem('userToken');
    if (enCodedToken) {
      const deCodedToken: UserData = jwtDecode<UserData>(enCodedToken);
      setUserData(deCodedToken);
       // SetuserData({ token: '123456' });
    }
  };

  useEffect(() => {
    if (localStorage.getItem('userToken') || userData != null) {
      saveUserData();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userData, saveUserData }}>
      {children}
    </AuthContext.Provider>
  );
}
