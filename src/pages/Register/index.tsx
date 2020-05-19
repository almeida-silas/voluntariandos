import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';
import styles from './styles';

const Register: React.FC = () => {
	const navigation = useNavigation();

	const navigateToRegister2 = () => {
		navigation.navigate('Register2');
	};

	return (
		<View style={styles.container}>
			<Text />

			<TextInput style={styles.input} placeholder='Informe o Tipo de Usuario' />

			<TextInput style={styles.input} placeholder='Informe seu Email' />

			<TextInput
				style={styles.input}
				secureTextEntry={true}
				placeholder='Informe sua Senha'
			/>

			<TextInput style={styles.input} placeholder='Informe seu Telefone' />

			<Button submit={navigateToRegister2}>Continar</Button>
		</View>
	);
};

export default Register;
