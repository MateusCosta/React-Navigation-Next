import React from 'react';
import { View, Text, Button } from 'react-native';

import { Container } from './styles';

export default function Home({navigation}) {
  return (
    <Container>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
    </Container>
  );
}
