import React from 'react';
import { View, Text, Button } from 'react-native';

export default function App() {
  const [page, setPage] = React.useState('home');

  if (page === 'second') {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Du är på sida 2</Text>
        <Button title="Tillbaka" onPress={() => setPage('home')} />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Startsida</Text>
      <Button title="Gå till sida 2" onPress={() => setPage('second')} />
    </View>
  );
}
