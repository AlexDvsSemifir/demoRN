// Import React
import {View, Text} from 'react-native';
import React from 'react';
import Introduction from './Components/Introduction/Introduction';

// Structure du composant fonction classique.
const App = () => {
  return (
    <View>
      <Text>APP Works !</Text>
      <Introduction monNom={'Alex'} />
    </View>
  );
};

export default App;
