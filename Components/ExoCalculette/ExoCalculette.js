import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const ExoCalculette = () => {
  const [nums, setNums] = useState([
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '.',
    '0',
    '00',
  ]);

  const [symboles, setSymboles] = useState([
    ' + ',
    ' - ',
    ' * ',
    '(',
    ' / ',
    ')',
  ]);

  let [calcul, setCalcul] = useState('');

  /**
   * Fonction qui va générer des bouttons à partir d'une liste
   * Chaque bouton aura pour value sa valeur (bouton 1 = 1, 2 = 2 ...)
   * OnPress : Concatène en string la valeur avec "calcul" en vue d'être calculé.
   * @param {} item
   */
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.button}
      onPress={event => {
        setCalcul((calcul = calcul + item));
      }}>
      <Text style={styles.text}>{item}</Text>
    </TouchableOpacity>
  );

  /**
   * Génère la key à partir de la valeur.
   * @param {str} item : item de la liste
   *
   */
  const keyExtractor = item => item;

  const handleChangeText = input => {
    setCalcul(input);
  };

  const handleClear = () => {
    setCalcul('');
  };

  /**
   * Appel de la fonction "eval" pour rendre un calcul à partir d'un str.
   * Retourne un str également.
   */
  const handleResult = () => {
    setCalcul(eval(calcul).toString());
  };

  return (
    <View style={styles.container}>
      <View style={styles.outContaier}>
        <Text style={styles.result}>{calcul}</Text>
        <TextInput
          onChangeText={handleChangeText}
          value={calcul}
          style={styles.text}
          keyboardType="default"
          placeholder="Tapez votre calcul ici"
        />
      </View>
      <View style={styles.buttonContaier}>
        <View style={styles.pavNum}>
          <FlatList
            data={nums}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            numColumns={3}
          />
          <FlatList
            data={symboles}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            numColumns={3}
          />
          <Button title="=" onPress={handleResult} />
        </View>
      </View>
      <Button title="Clear" onPress={handleClear} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  },
  pavNum: {
    flex: 5,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  button: {
    alignItems: 'center',
    alignContent: 'center',
    borderColor: 'black',
    backgroundColor: 'cyan',
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  text: {
    fontSize: 25,
    alignSelf: 'center',
  },
  result: {
    fontSize: 100,
    alignSelf: 'center',
  },
  symbols: {
    flex: 2,
  },
  outContaier: {
    flex: 1,
  },
  buttonContaier: {
    flex: 1,
  },
});

export default ExoCalculette;
