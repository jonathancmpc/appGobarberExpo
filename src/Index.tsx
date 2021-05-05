import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  useFonts,
  RobotoSlab_400Regular,
  RobotoSlab_500Medium,
} from '@expo-google-fonts/roboto-slab';

import Routes from './routes';

const Index: React.FC = () => {
  useFonts({
    FontRegular: RobotoSlab_400Regular,
    FontBold: RobotoSlab_500Medium,
  });

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <View style={{ backgroundColor: '#312e38', flex: 1 }}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default Index;
