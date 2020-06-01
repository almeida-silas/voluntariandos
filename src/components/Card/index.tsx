import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

interface ICard {
  imageProfile: ImageSourcePropType;
  name: string;
  description: string;
  content?: string;
  navigateTo: string;
}

const Card: React.FC<ICard> = (informations: ICard) => {
  const { imageProfile, name, description, content, navigateTo } = informations;
  const navigation = useNavigation();

  const navigationToPage = () => {
    navigation.navigate(`${navigateTo}`);
  };

  return (
    <View style={styles.container}>
      <Image source={imageProfile} style={styles.imageProfile} />

      <Text style={styles.textContent}>Nome: {name}</Text>
      <Text style={styles.textContent}>Assunto: {description}</Text>
      <Text style={styles.textContent}>Necessidades: {content}</Text>

      <View style={styles.containerIcons}>
        <TouchableOpacity>
          <Icon name="alert-octagon" style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={navigationToPage}>
          <Icon name="arrow-right-circle" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
