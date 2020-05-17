import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const Button: React.FC = (props) => {
	return (
		<TouchableOpacity style={styles.container}>
			<Text style={styles.buttonText}>{props.children}</Text>
		</TouchableOpacity>
	);
};

export default Button;
