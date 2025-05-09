import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import Inputbox from '../../common/Inputbox';
import Button from '../../common/Button';
import {useNavigation} from '@react-navigation/native';
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const ForgetPassword = () => {
  const navigation = useNavigation();
  const HandleNavigate = () => {
    navigation.navigate('OTPverification');
  };
  const BackScreenFun = () => {
    navigation.goBack();
  };
  return (
    <View>
      <TouchableOpacity onPress={BackScreenFun}>
        <View style={styles.imgContainer}>
          <Image
            source={require('../../../assets/imges/Back.png')}
            style={styles.img}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.Container}>
        <View style={styles.HeadingText}>
          <Text style={styles.HeadingTop}>Forget Password?</Text>
        </View>
        <View style={styles.subHeading}>
          <Text style={styles.ForgetText}>Forget your password?</Text>
          <Text style={styles.secondText}>Don't worry</Text>
        </View>
        <View style={styles.SecondHedingContainer}>
          <Text style={styles.description}>
            Please enter the email address which assosiated with your account
          </Text>
        </View>
        <View style={styles.InputBoxContainer}>
          <Text style={styles.labelStyle}>Email</Text>
          <Inputbox
            style={styles.input}
            img={require('../../../assets/imges/email-icon.png')}
            placeholdar="Enter your email"
          />
        </View>
      </View>

      <View style={styles.timeContainer}>
        <View style={styles.childTimeContainer}>
          <Text style={styles.time}>00:54</Text>
          <Text style={styles.text}>Send again</Text>
        </View>
      </View>
      <View style={styles.btn}>
        <Button title="Send OTP" onPress={HandleNavigate} />
      </View>
    </View>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  imgContainer: {
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
    width: SCREEN_WIDTH * 0.91,
    height: verticalScale(276),
    position: 'absolute',
    top: 104,
    left: 20,
    // borderWidth: 2,
  },
  HeadingText: {
    width: SCREEN_WIDTH * 0.91,
    height: verticalScale(36),
    // borderWidth: 1,
  },
  HeadingTop: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: scale(24),
    lineHeight: verticalScale(36),
  },
  subHeading: {
    width: SCREEN_WIDTH * 0.91,
    height: verticalScale(30),
    gap: moderateScale(6),
    lineHeight: verticalScale(30),
    top: verticalScale(8),
    // borderWidth: 1,
    flexDirection: 'row',
  },
  ForgetText: {
    fontFamily: 'Montserrat',
    color: '#858585',
    fontWeight: 400,
    fontSize: scale(16),
    lineHeight: verticalScale(30),
  },
  secondText: {
    fontFamily: 'Montserrat',
    color: '#200233',
    fontWeight: 400,
    fontSize: scale(16),
    lineHeight: verticalScale(30),
  },
  SecondHedingContainer: {
    width: SCREEN_WIDTH * 0.9,
    height: verticalScale(48),
    position: 'absolute',
    top: 118,
    // borderWidth: 2,
  },
  description: {
    fontFamily: 'Montserrat',
    fontWeight: 400,
    fontSize: scale(16),
    lineHeight: verticalScale(24),
    color: '#858585',
  },
  InputBoxContainer: {
    height: verticalScale(90),
    position: 'absolute',
    top: 186,
    gap: moderateScale(12),
    // borderWidth: 2,
  },
  input: {
    width: SCREEN_WIDTH * 0.9,
    height: verticalScale(54),
  },
  labelStyle: {
    fontFamily: 'Montserrat',
    height: verticalScale(24),
    fontWeight: 500,
    fontSize: scale(16),
    lineHeight: verticalScale(24),
  },
  timeContainer: {
    width: SCREEN_WIDTH * 0.9,
    position: 'absolute',
    height: verticalScale(64),
    justifyContent: 'center',
    alignItems: 'center',
    right: 20,
    // borderWidth: 2,
    top: 425,
  },
  childTimeContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  time: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: scale(24),
    color: '#FF5E5E',
    lineHeight: verticalScale(32),
  },
  text: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: scale(16),
    lineHeight: verticalScale(20),
  },
  btn: {
    position: 'absolute',
    width: SCREEN_WIDTH * 0.9,
    left: 20,
    top: 525,
  },
});
