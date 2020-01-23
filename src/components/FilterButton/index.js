import React from 'react';
import { View } from 'react-native';

import { Container } from './styles';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

export default function FilterButton({navigation}) {
    console.tron.log('toggle drawer',navigation)
  return (
    <Container>
         <Icon name="filter-list" size={30} color="#FFF" 
         onPress={() => navigation.navigate('Filter')} 
         />
    </Container>
  );
}
