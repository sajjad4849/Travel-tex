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
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
    height: verticalScale(105),
    borderRadius: 20,
    borderWidth: 1,
  },
  ChildContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 2,
    // borderColor: 'blue',
  },
  imgeStyle: {
    width: moderateScale(90),
    height: moderateScale(90),
    top: '11%',
    left: '12%',
    // borderWidth: 2,
  },
  textContainer: {
    width: SCREEN_WIDTH * 0.56,
    left: '10%',
    top: '10%',
    // borderWidth: 2,
    gap: 8,
  },
  titlestyle: {
    fontWeight: 600,
    fontSize: scale(16),
    lineHeight: 24,
  },
  subtitlestyle: {
    fontWeight: 400,
    fontSize: scale(14),
    color: '#858585',
    lineHeight: 20,
  },
  radiOuter: {
    width: scale(14),
    height: verticalScale(12),
    borderWidth: 1,
    borderRadius: moderateScale(10),
    right: 5,
  },
});
