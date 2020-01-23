import React from 'react';
import { NavigationNativeContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {default as HomeScreen} from './pages/Home';
import {default as DetailsScreen} from './pages/Details';
import {default as FilterScreen} from './pages/Filter';
import {default as CustomDrawer} from './components/CustomDrawerContent';
import {default as ToggleDrawer} from './components/ToggleDrawer';
import {default as FilterButton} from './components/FilterButton';

import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import {View, Button, Text} from 'react-native';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const StackHome = (props) => {
  console.tron.log(props);
  const {navigation} = props;
  return (
    <Stack.Navigator initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#36413E',
      },
      headerTintColor: '#fff',
     
    }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Ofertas ",
          headerStyle: {
            backgroundColor: '#36413E',
          },
          headerTintColor: '#FFF',
          // header: ({ scene, previous, navigation }) => {
          //   console.tron.log(navigation);
          //   const { options } = scene.descriptor;
          //   const title =
          //     options.headerTitle !== undefined
          //       ? options.headerTitle
          //       : options.title !== undefined
          //       ? options.title
          //       : scene.route.name;
  
          //   return (
          //     <View
          //       title={title}
               
          //     >
          //      <Icon name="menu" size={30} color="#ccc" onPress={() => navigation.openDrawer()} />
          //   <Text>{title}</Text>
          //     </View>
          //   );
          // },
          headerLeft: (props) => (<ToggleDrawer navigation={navigation}/>),
          headerRight: (props) => (<FilterButton navigation={navigation}/>)

        }}
      />
      <Stack.Screen name="Filter" component={FilterScreen}   options={{
          title: "Filtros"}}/>
    </Stack.Navigator>
  );
}

const Routes = () => (
  <NavigationNativeContainer>
    <Drawer.Navigator hideStatusBar={false} overlayColor="rgba(0,0,0,0.5)" drawerContent={props => <CustomDrawer {...props} />}
    drawerStyle={{
      backgroundColor: '#FFF',
      color: '#CCC',
      width: 240,
    }}

    drawerContentOptions={{
      activeTintColor: '#999',
      itemStyle: { marginVertical: 0 },
    }}
    >
      <Drawer.Screen name="Ofertas" component={StackHome}  
      options={{
        drawerIcon : () => <Icon name="shopping-cart" size={30} color="#e31e28" 
        activeBackgroundColor="#e31e28"/>,
        }}
      />
      <Drawer.Screen name="Estabelecimentos" component={StackHome}  
      options={{
        drawerIcon : () => <Icon name="location-on" size={30} color="#e31e28" 
        activeBackgroundColor="#e31e28"/>,
        }}
      />
      <Drawer.Screen name="Minhas Listas" component={StackHome}  
      options={{
        drawerIcon : () => <Icon name="view-list" size={30} color="#e31e28" 
        activeBackgroundColor="#e31e28"/>,
        }}
      />
      <Drawer.Screen name="Super Ofertas" component={StackHome}  
      options={{
        drawerIcon : () => <Icon name="wb-sunny" size={30} color="#e31e28" 
        activeBackgroundColor="#e31e28"/>,
        }}
      />
      <Drawer.Screen name="Mensagens" component={StackHome}  
      options={{
        drawerIcon : () => <Icon name="message" size={30} color="#e31e28" 
        activeBackgroundColor="#e31e28"/>,
        }}
      />
      <Drawer.Screen name="Dúvidas" component={StackHome}  
      options={{
        drawerIcon : () => <Icon name="question-answer" size={30} color="#e31e28" 
        activeBackgroundColor="#e31e28"/>,
        }}
      />
      <Drawer.Screen name="Perfil" component={StackHome}  
      options={{
        drawerIcon : () => <Icon name="account-circle" size={30} color="#e31e28" 
        activeBackgroundColor="#e31e28"/>,
        }}
      />
      <Drawer.Screen name="Ajustes" component={StackHome}  
      options={{
        drawerIcon : () => <Icon name="settings" size={30} color="#e31e28" 
        activeBackgroundColor="#e31e28"/>,
        }}
      />
    </Drawer.Navigator>
  </NavigationNativeContainer>
);

export default Routes;