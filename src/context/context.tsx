import React, { createContext, useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';

import firebase from 'firebase';

interface AuthContextData {
	signed: boolean;
	user: object | null;
	signIn(user: IUser): Promise<string>;
	signOut(): void;
}

interface IUser {
	username?: string;
	email: string;
	password: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
	const [user, setUser] = useState<IUser | null>(null);

	async function signIn(user: IUser) {
		try {
			await firebase
				.auth()
				.signInWithEmailAndPassword(user?.email, user?.password);

			await AsyncStorage.setItem('@Auth:user', JSON.stringify(user?.username));

			return 'Conectado!';
		} catch (error) {
			return 'Email ou senha incorreta!';
		}
	}

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
