import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
  s,
} from 'react-native-size-matters';
import OtpInput from '../../common/OtpInput';
import Button from '../../common/Button';
import {useNavigation} from '@react-navigation/native';
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const OTP = () => {
  const navigation = useNavigation();
  const HandleNavigation = () => {
    navigation.navigate('ForgetPassword');
  };
  const BackButton = () => {
    navigation.goBack();
  };
  return (
    <View>
      <TouchableOpacity onPress={BackButton}>
        <View style={styles.BackImgContaoiner}>
          <Image
            source={require('../../../assets/imges/Back.png')}
            style={styles.img}
          />
        </View>
      </TouchableOpacity>

      <View style={styles.Container}>
        <View style={styles.childContainer}>
          <Text style={styles.textStyle}>OTP Verification</Text>
        </View>
        <View style={styles.paragraph}>
          <Text style={styles.text2}>
            Verify Your identity with One-Time otp code that has sent to you
            phone no.
          </Text>
        </View>
        <View style={styles.OtpboxContainer}>
          <OtpInput placeholder="2" />
          <OtpInput placeholder="4" />
          <OtpInput placeholder="8" />
          <OtpInput placeholder="4" />
        </View>
        <View style={styles.timeContainer}>
          <View style={styles.childTimeContainer}>
            <Text style={styles.time}>00:54</Text>
            <Text style={styles.text}>Send again</Text>
          </View>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Button title="Verify OTP" onPress={HandleNavigation} />
      </View>
    </View>
  );
};

export default OTP;

const styles = StyleSheet.create({
  BackImgContaoiner: {
    width: scale(24),
    height: verticalScale(24),
    top: verticalScale(30),
    left: scale(20),
  },
  img: {
    width: scale(22),
    height: verticalScale(16),
  },
  Container: {
    width: SCREEN_WIDTH * 0.9,
    height: verticalScale(300),
    // borderWidth: 2,
    // position: 'absolute',
    top: 116,
    left: 20,
  },
  childContainer: {
    width: SCREEN_WIDTH * 0.9,
    height: verticalScale(46),
    gap: moderateScale(20),
  },
  textStyle: {
    fontFamily: 'Montserrat',
    lineHeight: verticalScale(46),
    fontWeight: 600,
    fontSize: scale(32),
    // borderWidth: 1,
    // borderColor: 'blue',
  },
  paragraph: {
    height: verticalScale(48),
    width: SCREEN_WIDTH * 0.9,
    top: verticalScale(10),
  },
  text2: {
    fontFamily: 'Montserrat',
    fontWeight: 400,
    fontSize: scale(16),
    lineHeight: verticalScale(24),
    color: '#858585',
  },
  OtpboxContainer: {
    width: SCREEN_WIDTH * 0.89,
    height: verticalScale(82.5),
    gap: moderateScale(21),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top: verticalScale(30),
    // borderWidth: 1,
    // backgroundColor: 'red',
  },
  timeContainer: {
    width: SCREEN_WIDTH * 0.9,
    height: verticalScale(64),
    top: verticalScale(50),
  },
  childTimeContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  time: {
    fontFamily: 'Montserrat',
    lineHeight: verticalScale(32),
    fontWeight: 500,
    fontSize: scale(24),
    color: '#FF5E5E',
  },
  text: {
    fontFamily: 'Montserrat',
    lineHeight: verticalScale(20),
    fontWeight: 500,
    fontSize: scale(16),
  },
  btnContainer: {
    width: SCREEN_WIDTH * 0.9,
    top: verticalScale(180),
    // borderWidth: 1,
    left: scale(20),
  },
});
