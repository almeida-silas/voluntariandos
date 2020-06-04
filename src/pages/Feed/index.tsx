import React from 'react';
import { View, ScrollView } from 'react-native';

import Card from '../../components/Card';
import styles from './styles';

const image = {
  uri: '',
};

const Feed: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.cardsBody}>
        <Card
          imageProfile={image}
          name="Orn Mart"
          description="A new volunter"
          content="SAdasd"
          navigateTo="Maps"
        />

        <Card
          imageProfile={image}
          name="Orn Mart"
          description="A new volunter"
          content="SAdasd"
          navigateTo="Maps"
        />

        <Card
          imageProfile={image}
          name="Orn Mart"
          description="A new volunter"
          content="SAdasd"
          navigateTo="Maps"
        />

        <Card
          imageProfile={image}
          name="Orn Mart"
          description="A new volunter"
          content="SAdasd"
          navigateTo="Maps"
        />
        <Card
          imageProfile={image}
          name="Orn Mart"
          description="A new volunter"
          content="SAdasd"
          navigateTo="Maps"
        />
        <Card
          imageProfile={image}
          name="Orn Mart"
          description="A new volunter"
          content="SAdasd"
          navigateTo="Maps"
        />
      </View>
    </ScrollView>
  );
};

export default Feed;
