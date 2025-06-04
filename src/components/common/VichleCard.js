import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const VichleCard = ({id, img, title}) => {
  return (
    <View>
      <View style={styles.CardContainer}>
        <View style={styles.CardRow}>
          <Text style={styles.text}>{title}</Text>
          <TouchableOpacity style={styles.boxContainer}>
            <View style={styles.checkboxOuter}>
              <View style={styles.checkboxInner} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.imgContainer}>
          <Image source={img} style={styles.styleImg} />
        </View>
      </View>
    </View>
  );
};

export default VichleCard;

const styles = StyleSheet.create({
  CardContainer: {
    width: scale(140),
    height: verticalScale(120),
    borderWidth: 1,
    borderRadius: moderateScale(8),
  },
  checkboxContainer: {
    width: scale(14),
    height: verticalScale(14),
    borderWidth: 1,
    borderRadius: 10,
  },
  // boxContainer: {
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  CardRow: {
    // borderWidth: 2,
    top: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  checkboxOuter: {
    height: scale(14),
    width: scale(14),
    borderWidth: 1,
    borderColor: '#FF5E5E',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(6), // optional for rounded corner
  },
  checkboxInner: {
    height: scale(9.33),
    width: scale(9.33),
    backgroundColor: '#FF5E5E', // filled color when checked
    borderRadius: scale(5), // optional
  },
  imgContainer: {
    // borderWidth: 1,
    top: verticalScale(55),
    left: scale(10),
  },
  text: {
    fontWeight: '500',
    fontSize: scale(14),
    fontFamily: 'Montserrat',
  },
  styleImg: {
    width: scale(100),
    height: verticalScale(36),
    resizeMode: 'contain',
  },
});
