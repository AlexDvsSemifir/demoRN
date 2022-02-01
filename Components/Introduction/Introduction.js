// Import React
import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';

// Structure du composant fonction classique.
export const Introduction = props => {
  let [cour, setCour] = useState({
    nom: '',
    numero: '',
  });

  const handlePress = e => {
    setCour({
      nom: 'ReactNative : Tuto',
      numero: 42,
    });
  };

  return (
    <View>
      <View>
        <Text>Composant Intro</Text>
      </View>
      <View>
        <Text>Bienvenue</Text>
        <Text>Cour : {cour.nom}</Text>
        <Text>Numéro : {cour.numero}</Text>
        <Text>Je suis suivi par {props.monNom}</Text>
      </View>
      <View>
        {/*
        Button : Element bouton spécifique à ReactNative
            - onPress est l'équivalent du onClick
        */}
        <Button title="Click me !" onPress={handlePress} />
      </View>
    </View>
  );
};

export default Introduction;
