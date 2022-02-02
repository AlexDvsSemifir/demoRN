// Import React
import {View, Text, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import Introduction from './Components/Introduction/Introduction';
import Statusbar from './Components/Statusbar/Statusbar';
import Scroller from './Components/Scroller/Scroller';
import FlatNest from './Components/FlatNest/FlatNest';
import NestedList from './Components/NestedList/NestedList';
import FlexBox from './Components/FlexBox/FlexBox';
import ExerciceFlex from './Components/ExerciceFlex/ExerciceFlex';
import TouchPress from './Components/TouchPress/TouchPress';
import GestionInput from './Components/GestionInput/GestionInput';
import Alertes from './Components/Alertes/Alertes';

// Structure du composant fonction classique.
const App = () => {
  return (
    <View style={styles.body}>
      <View style={styles.body}>
        {/* <Introduction monNom={'Alex'} /> */}
        {/* <Statusbar /> */}
        {/* <Scroller /> */}
        {/* <FlatNest /> */}
        {/* <NestedList /> */}
        {/* <FlexBox /> */}
        {/* <ExerciceFlex /> */}
        {/* <TouchPress /> */}
        {/* <GestionInput /> */}
        <Alertes />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});

export default App;
