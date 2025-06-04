import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const Button = ({title, onPress, style}) => {
  console.log('props....', title);
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: '#FF5E5E',
    borderRadius: moderateScale(30),
    paddingVertical: verticalScale(12),
    height: scale(45),
    // paddingHorizontal: scale(140),
  },
  text: {
    fontWeight: 600,
    fontSize: moderateScale(16),
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'Urbanist',
    fontWeight: moderateScale(600),
  },
});
