import React from 'react';
import { View, Animated} from 'react-native';
import { DrawerContentScrollView, DrawerItemList,DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

// import { Container } from './styles';

export default function CustomDrawerContent(props) {
  console.log(props);
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
        label="Help"
        onPress={() => Linking.openUrl('https://mywebsite.com/help')}
        icon = {() =><Icon name="adb" size={30} color="#900" />}
      />
      </DrawerContentScrollView>
    );
  };