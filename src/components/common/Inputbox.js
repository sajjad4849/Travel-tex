import {View, TextInput, StyleSheet, Image} from 'react-native';
import React from 'react';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {Dimensions} from 'react-native';
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const Inputbox = ({
  placeholdar = '',
  img = null,
  icon = null,
  style = null,
}) => {
  // console.log('Place holder.....', placeholdar);
  // console.log('img.....', img);
  // console.log('icon.....', icon);

  return (
    <View style={styles.Container}>
      <TextInput
        placeholder={String(placeholdar)} // Ensures it's a string
        style={[styles.input, style]}
      />
      {img && <Image source={img} style={styles.icon} />}
      {icon && <Image source={icon} style={styles.icon2} />}
    </View>
  );
};

export default Inputbox;

const styles = StyleSheet.create({
  Container: {
    gap: scale(12),
  },
  input: {
    width: SCREEN_WIDTH * 0.92,
    position: 'relative',
    height: verticalScale(54),
    borderWidth: 1,
    borderRadius: moderateScale(80),
    paddingHorizontal: scale(45),
    fontWeight: '300',
    fontSize: scale(16),
    fontFamily: 'Montserrat',
  },
  icon: {
    position: 'absolute',
    top: 17,
    left: 16,
    width: scale(24),
    height: verticalScale(24),
    resizeMode: 'contain',
  },
  icon2: {
    left: 290,
    top: -52,
    width: scale(24),
    height: verticalScale(24),
    resizeMode: 'contain',
  },
});
