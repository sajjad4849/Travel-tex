import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {verticalScale} from 'react-native-size-matters';

const InputFild = ({placeholdar, img}) => {
  return (
    <View style={styles.inputWrapper}>
      <TextInput style={styles.InputText} placeholder={placeholdar} />
      {img && <Image source={img} style={styles.InputboxIcon} />}
    </View>
  );
};

export default InputFild;

const styles = StyleSheet.create({
  inputWrapper: {
    position: 'relative',
    justifyContent: 'center',
  },
  InputText: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 80,
    backgroundColor: '#E8E8E8',
    paddingLeft: 10,
    paddingRight: 40,
    height: verticalScale(45),
  },
  InputboxIcon: {
    position: 'absolute',
    right: 10,
    height: verticalScale(20),
    resizeMode: 'contain',
    width: 20,
  },
});
