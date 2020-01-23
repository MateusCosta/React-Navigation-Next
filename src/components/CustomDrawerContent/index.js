import React from 'react';
import { View, Animated} from 'react-native';
import { DrawerContentScrollView, DrawerItemList,DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

import {
  Container,
  ContainerProfile,
  ProfileImage,
  ProfileName,
  ProfileEmail,
  ContainerMenu,
  MenuItem,
  MenuItemIcon,
  MenuItemText,
} from './styles';
export default function CustomDrawerContent(props) {
  console.tron.log(props);
    return (
      <>
        <ContainerProfile
          source={{uri:'https://img.freepik.com/free-vector/elegant-white-background-with-shiny-lines_1017-17580.jpg?size=626&ext=jpg'}}
        >
          <ProfileImage
            source={{
              uri: 'https://api.adorable.io/avatars/285/abott@adorable.io.png'
            }}
          />
          <ProfileName>Nome do usuário</ProfileName>
          <ProfileEmail>contato@email.com</ProfileEmail>
        </ContainerProfile>
        <ContainerMenu>
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          {/* <DrawerItem
            label="Estabelecimentos"
            // onPress={() => Linking.openUrl("https://mywebsite.com/help")}
            icon={() => <Icon name="location-on" size={30} color="#e31e28" />}
          /> */}
        </DrawerContentScrollView>
        </ContainerMenu>
        
      </>
    );
  };