import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';

const TouchPress = () => {
  let [count1, setCount1] = useState(0);

  const handlePress = () => {
    setCount1((count1 += 1));
  };
  const handleLessPress = () => {
    setCount1((count1 -= 1));
  };
  const handleResetPress = () => {
    if (count1 === 0) {
      alert('Le compteur est déjà à 0 !');
    }
    setCount1((count1 = 0));
  };

  return (
    <View>
      <Text>compteur: {count1}</Text>
      <Button title=" + " onPress={handlePress} />

      {/*
      Balise TouchableOpacity : Les balises enfants seront clickables.
        - Fonctionne avec le texte, les images ...
        - Peut contenir autant d'éléments qu'on le souhaite : ils dépendront toutes de la fonction détaillée en paramètre
        - onPress: Doit renvoyer vers la fonction
        - la nouvelle MAJ a ajouté une nouvelle balise qui rend celle-ci "obsolète" : la balise Pressable
      */}
      <TouchableOpacity onPress={handleLessPress}>
        <Text> - </Text>
      </TouchableOpacity>
      {/* Balise Pressable : Prend en charge bieeeeeeen plus de paramètres d'évents ! */}
      <Pressable onPress={handleResetPress}>
        <Text> Reset </Text>
      </Pressable>
    </View>
  );
};

export default TouchPress;

const styles = StyleSheet.create({});
