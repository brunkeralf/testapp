import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Startsida</Text>
      <Button title="Gå till sida 2" onPress={() => navigation.navigate('Second')} />
    </View>
  );
};

export default HomeScreen;
