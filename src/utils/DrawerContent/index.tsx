import React from 'react';
import { View } from 'react-native';

import { Avatar, Title, Caption, Drawer } from 'react-native-paper';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';

import { useAuth } from '../../hooks/auth';

import styles from './styles';

interface IProps {}

const DrawerContent: React.FC<IProps> = (props) => {
  const { signOut } = useAuth();

  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <Drawer.Section>
        <Avatar.Image
          style={styles.avatar}
          source={{
            uri:
              'https://st2.depositphotos.com/3834629/8297/v/450/depositphotos_82979386-stock-illustration-cowboy-face.jpg',
          }}
          size={90}
        />
        <Title style={styles.title}>Silas Almeida de Sena</Title>
        <Caption style={styles.caption}>example@email.com</Caption>
      </Drawer.Section>
      <View style={styles.containerItens}>
        <Drawer.Item
          style={styles.itens}
          label="Meu Perfil"
          icon={() => <Icon name="edit" style={styles.icon} />}
          onPress={() => {}}
        />
        <Drawer.Item
          style={styles.itens}
          label="Candidaturas"
          icon={() => <Icon name="clock" style={styles.icon} />}
          onPress={() => {}}
        />
        <Drawer.Item
          style={styles.itens}
          label="Configuração"
          icon={() => <Icon name="settings" style={styles.icon} />}
          onPress={() => {}}
        />
        <Drawer.Item
          style={styles.itens}
          label="Sair"
          icon={() => <Icon name="log-out" style={styles.icon} />}
          onPress={signOut}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
