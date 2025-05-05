import {View, Text, StyleSheet} from 'react-native';
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
  return (
    <View>
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
        <View style={styles.btnContainer}>
          <Button title="Verify OTP" onPress={HandleNavigation} />
        </View>
      </View>
    </View>
  );
};

export default OTP;

const styles = StyleSheet.create({
  Container: {
    width: SCREEN_WIDTH * 0.9,
    height: verticalScale(341),
    // borderWidth: 2,
    position: 'absolute',
    top: 116,
    left: 20,
  },
  childContainer: {
    height: verticalScale(46),
    // borderWidth: 2,
    borderColor: 'green',
  },
  textStyle: {
    fontWeight: 600,
    fontSize: scale(32),
  },
  paragraph: {
    height: verticalScale(48),
  },
  text2: {
    fontWeight: 400,
    fontSize: scale(16),
    lineHeight: 24,
    color: '#858585',
  },
  OtpboxContainer: {
    height: verticalScale(82),
    gap: moderateScale(21),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
  },
  timeContainer: {
    height: verticalScale(64),
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
  btnContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
