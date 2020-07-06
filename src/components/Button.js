import React from 'react';
import {StyleSheet, TouchableOpacity, View, Dimensions} from 'react-native';
import TextCmp from './TextCmp';

const Button = ({title, outline, style}) => {
  return (
    <TouchableOpacity
      style={[outline ? styles.btn_outline : styles.btn, style]}>
      <TextCmp style={outline ? styles.title_outline : styles.title}>
        {title}
      </TextCmp>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    padding: 10,
    backgroundColor: '#3c3c3c',
    borderRadius: 30,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width / 3,
  },
  btn_outline: {
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#3c3c3c',
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width / 3,
  },
  title_outline: {
    color: '#3c3c3c',
  },
  title: {
    color: '#fff',
  },
});
