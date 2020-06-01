import React from 'react';
import { View } from 'react-native';
import { Avatar, Title, Caption, Paragraph, Drawer } from 'react-native-paper';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface IProps {}

const DrawerContent = (props: IProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <View>
        <View>
          <Avatar.Image
            source={{
              uri:
                'https://st2.depositphotos.com/3834629/8297/v/450/depositphotos_82979386-stock-illustration-cowboy-face.jpg',
            }}
            size={90}
          />
          <Title>Silas Almeida de Sena</Title>
          <Caption>@s1lasjee</Caption>
          <View>
            <View>
              <Paragraph>202</Paragraph>
              <Caption>Following</Caption>
            </View>
          </View>
          <View>
            <View>
              <Paragraph>159</Paragraph>
              <Caption>Followers</Caption>
            </View>
          </View>
        </View>
      </View>
      <Drawer.Section>
        <Drawer.Item
          icon={({ color, size }) => (
            <MaterialCommunityIcons name="tune" color={color} size={size} />
          )}
          label="Preferences"
          onPress={() => {}}
        />
      </Drawer.Section>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
