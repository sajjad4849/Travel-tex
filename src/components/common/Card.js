/* eslint-disable react/self-closing-comp */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
// import {AccountList} from './SelectAcData';
import {Dimensions} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const Card = ({img, title, subtitle, style, titleColor}) => {
  return (
    <View>
      <View style={[styles.CardContaner, style]}>
        <View style={styles.ChildContainer}>
          <View>
            <Image source={img} style={styles.imgeStyle} />
          </View>
          <View style={styles.textContainer}>
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={[styles.titlestyle, {color: titleColor}]}>
                {title}
              </Text>
              <TouchableOpacity style={styles.radiOuter}></TouchableOpacity>
            </View>
            <Text style={styles.subtitlestyle}>{subtitle}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  CardContaner: {
    width: SCREEN_WIDTH * 0.9,
    height: verticalScale(130),
    borderRadius: moderateScale(20),
  },
  ChildContainer: {
    width: SCREEN_WIDTH * 0.9,
    height: verticalScale(120),
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: moderateScale(20),
    // borderColor: 'blue',
  },
  imgeStyle: {
    width: moderateScale(90),
    height: moderateScale(90),
    resizeMode: 'contain',
    left: scale(20),
  },
  textContainer: {
    width: scale(194),
    left: scale(29),
    // top: verticalScale(),
    // borderWidth: 2,
    gap: 8,
  },
  titlestyle: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: scale(16),
    lineHeight: 24,
  },
  subtitlestyle: {
    fontFamily: 'Montserrat',
    height: verticalScale(60),
    width: scale(194),
    fontWeight: 400,
    fontSize: scale(14),
    color: '#858585',
    lineHeight: verticalScale(20),
    // borderWidth: 2,
    // borderColor: 'red',
  },
  radiOuter: {
    width: scale(12),
    height: verticalScale(12),
    borderWidth: 1,
    borderRadius: moderateScale(10),
    right: 5,
  },
});
