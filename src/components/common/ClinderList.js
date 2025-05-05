import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {Dimensions} from 'react-native';
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const ClinderList = ({
  title,
  ClinderImg,
  MenueIcon,
  date,
  dollarImg,
  status,
  Amount,
  Mycolor,
}) => {
  console.log('status.............', status);
  return (
    <View>
      <View style={[styles.listContainer, {backgroundColor: Mycolor}]}>
        <View style={styles.titleStyle}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.DateAndClinderContainer}>
          <Image source={ClinderImg} style={styles.ClinderImage} />
          <Text style={styles.titleText}>{date}</Text>
        </View>
        <View style={styles.AmountContainer}>
          <Image source={dollarImg} style={styles.dollarImage} />
          <Text>{Amount}</Text>
        </View>
        <View style={{width: scale(55)}}>
          <Text style={styles.titleText}>{status}</Text>
        </View>
        <View style={{width: scale(20)}}>
          <Image source={MenueIcon} style={styles.popap} />
        </View>
      </View>
    </View>
  );
};

export default ClinderList;

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    height: verticalScale(48),
    borderRadius: 4,
    // borderWidth: 1,
    backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
  },
  DateAndClinderContainer: {
    flexDirection: 'row',
    gap: moderateScale(6),
    width: scale(98),
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
  },
  AmountContainer: {
    flexDirection: 'row',
    gap: moderateScale(6),
    width: scale(80),
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    width: scale(68),
    // borderWidth: 1,
    left: scale(6),
  },
  titleText: {
    fontFamily: 'Lato',
    fontWeight: 400,
    fontSize: 12,
    color: '#333333',
  },
  ClinderImage: {
    height: verticalScale(17),
    width: scale(16),
    resizeMode: 'contain',
  },
  dollarImage: {
    width: scale(20),
    height: verticalScale(20),
    resizeMode: 'contain',
  },
  popap: {
    width: scale(4),
    height: verticalScale(14),
  },
});
