import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {Dimensions} from 'react-native';
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const SocialAuthButton = ({img, title}) => {
  return (
    <View>
      <TouchableOpacity style={styles.btn}>
        <View style={styles.InnerSection}>
          <Image source={img} style={styles.imgStyling} />
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SocialAuthButton;

const styles = StyleSheet.create({
  btn: {
    width: SCREEN_WIDTH * 0.9,
    height: verticalScale(60),
    borderRadius: moderateScale(16),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  InnerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    gap: moderateScale(10),
  },
  imgStyling: {
    width: scale(28),
    height: verticalScale(28),
    resizeMode: 'contain',
  },
  text: {
    fontWeight: 500,
    fontSize: scale(16),
    fontFamily: 'Montserrat',
    lineHeight: verticalScale(24),
  },
});
