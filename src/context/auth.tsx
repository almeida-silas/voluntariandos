import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';

import { IAuthUser, IUser } from './IUser';

interface IAuthContextData {
  signed: boolean;
  user: object | null;
  signIn(user: IAuthUser): Promise<boolean>;
  signOut(): void;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  const loadStoragedData = async () => {
    /* {
        const storageUser = await AsyncStorage.getItem('@Auth:user');
        const storageToken = await AsyncStorage.getItem('@Auth:token');

        if (storageUser && storageToken) {
        setUser(JSON.parse(storageUser));
      }
    } catch (error) {}*/
  };

  const signIn = async (authUser: IAuthUser) => {
    if (authUser.email && authUser.password) {
      const response = await api.post<IUser>('/signin', {
        email: authUser.email,
        password: authUser.password,
      });

      try {
        //await AsyncStorage.setItem('@Auth:user', JSON.stringify(response.data));
        //await AsyncStorage.setItem('@Auth:token', 'token');

        setUser(response.data);

        return true;
      } catch (error) {
        return false;
      }
    }
    return false;
  };

  function signOut() {
    /*AsyncStorage.clear(() => {
      setUser(null);
    });*/
  }

  useEffect(() => {
    loadStoragedData();
  }, []);

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
