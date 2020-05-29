import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

interface ICard {
  imageProfile: SVGImageElement;
  name: string;
  reason: string;
  need: string;
  onPress(): void;
}

const Card: React.FC<ICard> = (informations: ICard) => {
  const { imageProfile, name, reason, need, onPress } = informations;

  return (
    <View>
      <Image source={imageProfile} />
      <Text>Nome: {name}</Text>
      <Text>Razão: {reason}</Text>
      <Text>Necessidades: {need}</Text>

      <TouchableOpacity onPress={onPress}>AE</TouchableOpacity>
    </View>
  );
};

export default Card;
