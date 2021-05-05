import React from 'react';
import { StatusBar, Text, View } from 'react-native';

const Index: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#312e38" />
    <View style={{ backgroundColor: '#312e38', flex: 1 }}>
      <Text>Teste</Text>
    </View>
  </>
);

export default Index;
