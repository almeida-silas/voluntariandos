import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';
import styles from './styles';

const Main: React.FC = () => {
	const navigation = useNavigation();

	const navigateToLogin = () => {
		navigation.navigate('Login');
	};

	const navigateToRegister = () => {
		navigation.navigate('Register');
	};

	return (
		<View style={styles.container}>
			<Button>Login</Button>
			<Button>Inscrever-se</Button>
		</View>
	);
};
export default Main;
