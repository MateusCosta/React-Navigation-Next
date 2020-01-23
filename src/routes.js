import React from 'react';
import { NavigationNativeContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {default as HomeScreen} from './pages/Home';
import {default as DetailsScreen} from './pages/Details';

import {default as CustomDrawer} from './components/CustomDrawerContent';

import Icon from 'react-native-vector-icons/dist/MaterialIcons';

import {View, Button, Text} from 'react-native';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const StackHome = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "Home",
        header: ({ scene, previous, navigation }) => {
          console.log(navigation);
          const { options } = scene.descriptor;
          const title =
            options.headerTitle !== undefined
              ? options.headerTitle
              : options.title !== undefined
              ? options.title
              : scene.route.name;

          return (
            <View
              title={title}
             
            >
             <Icon name="menu" size={30} color="#ccc" onPress={() => navigation.openDrawer()} />
          <Text>{title}</Text>
            </View>
          );
        },
        headerLeft: (props) => {
          // console.log(props);
          return (
          <View>
            <Icon name="menu" size={30} color="#ccc" onPress={() => navigation.openDrawer()} />
          </View>
        )}
      }}
    />
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
);

const Routes = () => (
  <NavigationNativeContainer>
    <Drawer.Navigator hideStatusBar={false} overlayColor="rgba(0,0,0,0.5)" drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={StackHome} 
      options={{
        drawerIcon : () => <Icon name="home" size={30} color="#900" />

      }}
      />
      <Drawer.Screen name="Details" component={DetailsScreen} />
    </Drawer.Navigator>
  </NavigationNativeContainer>
);

export default Routes;