import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

import { IRequirements } from '../../../interfaces/IRequirements';
import { shortenString } from '../../../utils/stringOperations';

export interface IProps {
  requirement: IRequirements;
}

const Card: React.FC<IProps> = ({ requirement }) => {
  const navigation = useNavigation();

  const navigationToPage = () => {
    navigation.navigate(`${requirement.id}`);
  };

  const {
    description,
    content,
    institution: { full_name, imageProfile },
  } = requirement;

  return (
    <View style={styles.container}>
      {imageProfile ? (
        <Image source={{ uri: imageProfile }} style={styles.imageProfile} />
      ) : null}

      <View>
        <Text style={styles.textContent}>
          Instituição:
          {shortenString(full_name, 25)}
        </Text>

        <Text style={styles.textContent}>
          Assunto:
          {shortenString(description, 25)}
        </Text>

        <Text numberOfLines={2} style={styles.textContent}>
          Necessidades:
          {shortenString(content, 45)}
        </Text>
      </View>

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
