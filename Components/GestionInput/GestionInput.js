import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native';
import React, {useState} from 'react';

const GestionInput = () => {
  const [name, setName] = useState('inconnu');
  const [edit, setEdit] = useState(true);

  /**
   * Permet de récupérer l'input Name et de définir le nom.
   * @param {string} input
   */
  const handleSetName = input => {
    setName(input);
  };

  /**
   * Inverse le booléen de 'edit' pour le rendre non éditable
   */
  const handlePress = () => {
    setEdit(!edit);
  };

  return (
    <View style={styles.body}>
      {/*
        La balise TextInput permet de saisir du texte et affichera le clavier
            - OnChangeText : contient la fonction pour dire quoi faire quand le texte change,
            - placeholder : Placeholder classique
            - maxLength : Définit la longueur maximale
            - editable : Définit si le bouton peut ou non être édité.
            - keyboardType : Définit le type de clavier qui vca s'afficher (que les digits, les caractères, etc.)
            - multilie (bool) : Définit l'écriture sur une ou plusieurs lignes
        */}
      <TextInput
        onChangeText={handleSetName}
        placeholder="Saisir votre nom"
        style={styles.input}
        maxLength={300}
        editable={edit}
        keyboardType="default"
        multiline={true}
      />
      <View>
        <Text style={styles.text}>Bonjour {name}</Text>
      </View>
      <Pressable onPress={handlePress}>
        <Text>{edit ? 'input Actif' : 'input inactif'}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    color: 'red',
  },
  input: {
    width: 300,
  },
});

export default GestionInput;
