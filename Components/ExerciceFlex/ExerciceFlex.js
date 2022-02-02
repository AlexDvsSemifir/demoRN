import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export const ExerciceFlex = props => {
  const tardisIcon1 = require('../../src/icons/tardis-icon-14.jpg');
  const tardisIcon2 = require('../../src/icons/tardis-icon-16.jpg');

  return (
    <View style={styles.container}>
      <Text>Ceci est l'exercice FlexBox</Text>
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Image source={tardisIcon2} style={styles.icons} />
          <Image source={tardisIcon2} style={styles.icons} />
          <Image source={tardisIcon2} style={styles.icons} />
          <Image source={tardisIcon2} style={styles.icons} />
        </View>
        <View style={styles.body}>
          <View style={styles.sections}>
            <View style={styles.article}>
              <Text>Ceci est un article</Text>
              <Image
                source={{
                  uri: 'https://m.media-amazon.com/images/I/51oRmua+M3L.jpg',
                }}
                style={styles.images}
              />
            </View>
          </View>
          <View style={styles.aside}>
            <Image source={tardisIcon1} style={styles.icons} />
            <Image source={tardisIcon1} style={styles.icons} />
            <Image source={tardisIcon1} style={styles.icons} />
            <Image source={tardisIcon1} style={styles.icons} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
    backgroundColor: '#1936f7',
  },
  body: {
    flex: 10,
    flexDirection: 'row-reverse',
    backgroundColor: '#ffffff',
  },
  sections: {
    flex: 1,
  },
  article: {
    flex: 1,
    background: '#8f9eff',
    alignItems: 'center',
  },
  aside: {
    width: 50,
    alignItems: 'stretch',
    backgroundColor: '#1936f7',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  icons: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  images: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
});

export default ExerciceFlex;
