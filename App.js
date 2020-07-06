import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Details from './src/screens/Details';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.flex}>
        <Details />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export default App;
