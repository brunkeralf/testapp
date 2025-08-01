import React from 'react';
import { View, Text, Button } from 'react-native';

const SecondScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Sida 2</Text>
      <Button title="Tillbaka" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default SecondScreen;
