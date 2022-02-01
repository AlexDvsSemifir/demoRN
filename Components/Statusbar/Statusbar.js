import React, {Button} from 'react';
import {View, Text, SafeAreaView, StatusBar, useState} from 'react-native';

export const Statusbar = () => {
  const [hidden, setHidden] = useState(false);

  const handleVisibility = () => {
    setHidden(!hidden);
  };

  return (
    //   Balise pour délilmiter la taille de l'écran
    <SafeAreaView>
      {/* Balise qui permet de gérer la status bar */}
      <StatusBar hidden={hidden} />
      <View>
        <Text>Ceci est ma StatusBar</Text>
      </View>
      <View>
        <Text>La statusbar est : {hidden ? 'caché' : 'visible'}</Text>
      </View>
      <View>
        <Button title="Visibilité" onPress={handleVisibility} />
      </View>
    </SafeAreaView>
  );
};
