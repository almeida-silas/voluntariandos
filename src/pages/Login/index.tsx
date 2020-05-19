import React, { useState } from 'react';
import { View, TextInput } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/auth';

import Button from '../../components/Button';
import styles from './styles';

const Login: React.FC = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { signIn } = useAuth();
	const navigate = useNavigation();

	const handdleLogin = async () => {
		const response = await signIn({ email, password });
		alert(response);
	};

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				placeholder='Digite seu e-mail'
				value={email}
				onChangeText={setEmail}
			/>

			<TextInput
				style={styles.input}
				placeholder='Digite sua senha'
				secureTextEntry={true}
				value={password}
				onChangeText={setPassword}
			/>
			<Button submit={handdleLogin}>Entrar</Button>
		</View>
	);
};
export default Login;
