import {View, Text, StyleSheet} from 'react-native';
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
  return (
    <View>
      <View style={styles.Container}>
        <View style={styles.HeadingText}>
          <Text style={styles.HeadingTop}>Forget Password</Text>
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
  Container: {
    width: SCREEN_WIDTH * 0.9,
    height: verticalScale(231),
    position: 'absolute',
    top: 104,
    left: 20,
    // borderWidth: 2,
  },
  HeadingText: {
    height: verticalScale(36),
    // borderWidth: 1,
  },
  HeadingTop: {
    fontWeight: 700,
    fontSize: scale(24),
    lineHeight: verticalScale(36),
  },
  subHeading: {
    height: verticalScale(30),
    gap: moderateScale(6),
    lineHeight: verticalScale(30),
    // borderWidth: 1,
    flexDirection: 'row',
  },
  ForgetText: {
    color: '#858585',
    fontWeight: 400,
    fontSize: scale(16),
  },
  secondText: {
    color: '#200233',
    fontWeight: 400,
    fontSize: scale(16),
  },
  SecondHedingContainer: {
    height: verticalScale(48),
    position: 'absolute',
    top: 118,
    // borderWidth: 2,
  },
  description: {
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
    fontWeight: 500,
    fontSize: scale(24),
    color: '#FF5E5E',
  },
  text: {
    fontWeight: 500,
    fontSize: scale(16),
  },
  btn: {
    position: 'absolute',
    width: SCREEN_WIDTH * 0.9,
    left: 20,
    top: 525,
  },
});
