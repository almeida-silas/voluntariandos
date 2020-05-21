import React, { createContext, useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';

interface AuthContextData {
  signed: boolean;
  user: object | null;
  signIn(user: IUser): Promise<boolean>;
  signOut(): void;
}

export interface IUser {
  username?: string;
  email: string;
  password: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  const signIn = async (userLogin: IUser) => {
    if (userLogin?.email && userLogin.password) {
      setUser(userLogin);

      return true;
    }
    return false;
  };

  function signOut() {
    AsyncStorage.clear(() => {
      setUser(null);
    });
  }

  useEffect(() => {
    async function loadStoragedData() {
      const storageUser = await AsyncStorage.getItem('@Auth:user');
      const storageToken = await AsyncStorage.getItem('@Auth:token');

      if (storageUser && storageToken) {
        setUser(JSON.parse(storageUser));
      }
    }

    loadStoragedData();
  }, []);

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
