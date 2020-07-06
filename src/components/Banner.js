import React from 'react';
import {StyleSheet, Image, View, Dimensions} from 'react-native';
import TextCmp from './TextCmp';

const Banner = () => {
  return (
    <View style={styles.container}>
      <TextCmp style={styles.description}>free delivery 1:24</TextCmp>
      <TextCmp style={styles.heading}>Salmon Bowl</TextCmp>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('../assets/images/food1.png')}
      />
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  description: {
    fontSize: 13,
  },
  heading: {
    fontSize: 25,
    marginTop: 10,
  },
  image: {
    width: Dimensions.get('window').width / 1.2,
  },
});
