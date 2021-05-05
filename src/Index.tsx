import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const Index: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#312e38" />
    <View style={{ backgroundColor: '#312e38', flex: 1 }}>
      <Routes />
    </View>
  </NavigationContainer>
);

export default Index;
