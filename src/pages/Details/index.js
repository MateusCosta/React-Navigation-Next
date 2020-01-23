import React from 'react';
import {View, Text, Button} from 'react-native';

// import { Container } from './styles';

export default function Details({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button 
        title="Go Back"
        onPress={() => navigation.goBack()}
        />
         <Button
          title="Go to Details"
          onPress={() => navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => navigation.popToTop()}
        />
      </View>
    );
  }
