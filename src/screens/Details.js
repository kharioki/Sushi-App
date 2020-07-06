import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Header from '../components/Header';
import Banner from '../components/Banner';
import BackgroundOval from '../components/BackgroundOval';
import TextCmp from '../components/TextCmp';
import Button from '../components/Button';

const Details = () => {
  return (
    <View style={styles.container}>
      <BackgroundOval />
      <Header />
      <Banner title="Salmon Bowl" img={require('../assets/images/food1.png')} />
      <View style={styles.details}>
        <TextCmp style={styles.textDola}>$12</TextCmp>
        <TextCmp style={styles.desc}>
          A fresh take on a raw fish favorite; the salmon bowl. Wild-caught
          salmon piled high on a bed of sticky rice, fresh avocado, pickled
          cucumber, scallions, and nori
        </TextCmp>
        <View style={styles.footers}>
          <View style={styles.dot} />
          <TextCmp style={styles.textCal}>325 CAL</TextCmp>
          <View style={styles.dot} />
        </View>
      </View>
      <View style={styles.listButton}>
        <Button title="Add Toppings" />
        <View style={{width: 20}} />
        <Button title="Order" outline />
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  details: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  textDola: {
    fontSize: 25,
    fontFamily: 'AvenirLTStd-Book',
    fontWeight: 'bold',
  },
  desc: {
    lineHeight: 18,
  },
  footers: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  dot: {
    width: 5,
    height: 5,
    backgroundColor: '#fdd700',
    borderRadius: 5,
  },
  textCal: {
    marginHorizontal: 20,
  },
  listButton: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
});
