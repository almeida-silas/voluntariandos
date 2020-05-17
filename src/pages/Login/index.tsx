import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import Button from '../../components/Button';
import styles from './styles';

const Login: React.FC = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [Authenticated, setAuthenticated] = useState(false);

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
			<Button>Entrar</Button>
		</View>
	);
};
export default Login;
