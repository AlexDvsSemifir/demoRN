import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import React from 'react';

const Alertes = () => {
  /**
   * Fonction qui permet d'afficher une alerte
   */
  const handlePress = () => {
    // Objet 'Alert', qui permet d'appeler la fonction 'alert' qui provoque ... une alerte
    // On peut lui passer plusieurs paramètres comme le message, les bouttons etc.
    // Alert.alert('Titre', 'message', [tableau optionnel qui peut contenir jusqu'à 3 boutons])
    // Les bouttons se passent comme des objets {} :
    //  -{text:'nom du bouton', onPress:{fonction}} : NB : la fonction doit être codée directement dans le message. On ne peut pas la sortir (la fonction)
    // cancelable : Se mart après le tableau, séparé par une virgule. Détermine ce qui se passe quand on clique sur "OK"

    Alert.alert('Mais !', 'Ses pas trait jontille sale pn !', [
      {text: 'Sorry', onPress: () => Alert.alert('Sorry', 'ses pa grav')},
      {
        text: 'Not Sorry',
        onPress: () => Alert.alert('Not Sorry ?!', 'Mer kel grosse PUTE !'),
      },
      {
        cancelable: true,
        onDismiss: () => Alert.alert('What ?!', "Tu oses m'ignorer ?!"),
      },
    ]);
  };

  return (
    <View>
      <Text>Composant alerte</Text>
      <Button title="Ne pas toucher !" onPress={handlePress} />
    </View>
  );
};

export default Alertes;
