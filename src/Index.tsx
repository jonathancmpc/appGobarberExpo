import React from 'react';
import { StatusBar, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import {
  useFonts,
  RobotoSlab_400Regular,
  RobotoSlab_500Medium,
} from '@expo-google-fonts/roboto-slab';
import { colors } from './styles/colors';

import Routes from './routes';

const Index: React.FC = () => {
  const [fontsLoaded] = useFonts({
    FontRegular: RobotoSlab_400Regular,
    FontBold: RobotoSlab_500Medium,
  });
  // const fontsLoaded = false;

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <View style={{ backgroundColor: colors.background, flex: 1 }}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default Index;
