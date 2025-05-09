import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {Dimensions} from 'react-native';
import SocialAuthButton from '../../common/SocialAuthButton';
import Button from '../../common/Button';
import {useNavigation} from '@react-navigation/native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const SocialLoginScreen = () => {
  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.mainContainer}>
      {/* Logo Section */}
      <View style={styles.logoSection}>
        <Image
          source={require('../../../assets/imges/logo.png')}
          style={styles.imgStyle}
          resizeMode="contain"
        />
      </View>

      {/* Auth Section */}
      <View style={styles.TitleContainer}>
        <Text style={styles.title}>Let's you in</Text>
      </View>
      <View style={styles.InnerSectionsContainer}>
        <View style={styles.authSection}>
          <View style={styles.buttonsWrapper}>
            <SocialAuthButton
              img={require('../../../assets/imges/fb-icon.png')}
              title="Continue with Facebook"
            />
            <SocialAuthButton
              img={require('../../../assets/imges/google.png')}
              title="Continue with Google"
            />
            <SocialAuthButton
              img={require('../../../assets/imges/apple.png')}
              title="Continue with Apple"
            />
          </View>
        </View>
        <View style={styles.BottomSide}>
          <View style={styles.linImg}>
            <Image
              source={require('../../../assets/imges/line.png')}
              style={styles.HorizentalLine}
            />
          </View>
          <View style={styles.btnStyle}>
            <Button title="Login" onPress={handleNavigation} />
          </View>
          <View style={styles.TextContainer}>
            <Text style={styles.text1}>Don't have an account?</Text>
            <Text style={styles.text2}>Sig Up</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SocialLoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    // backgroundColor: '#fff',
    // borderWidth: 2,
    width: SCREEN_WIDTH * 0.9,
    height: verticalScale(650),
    left: scale(20),
    paddingTop: verticalScale(31),
    gap: moderateScale(40),
  },
  logoSection: {
    alignItems: 'center',
    // borderWidth: 2,
  },
  imgStyle: {
    width: scale(120),
    height: verticalScale(120),
    resizeMode: 'contain',
  },
  authSection: {
    width: SCREEN_WIDTH * 0.9,
    height: verticalScale(220),
    alignItems: 'center',
    // borderWidth: 2,
    // borderColor: 'blue',
    gap: moderateScale(20),
  },
  TitleContainer: {
    width: SCREEN_WIDTH * 0.9,
    height: verticalScale(48),
    // borderWidth: 2,
  },
  title: {
    fontFamily: 'Montserrat',
    fontWeight: '600',
    fontSize: scale(32),
    lineHeight: verticalScale(48),
    textAlign: 'center',
  },
  buttonsWrapper: {
    width: '100%',
    gap: verticalScale(16),
    // borderWidth: 2,
  },
  InnerSectionsContainer: {
    gap: moderateScale(28),
  },
  BottomSide: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: SCREEN_WIDTH * 0.9,
    height: verticalScale(145),
    // borderWidth: 2,
    // borderColor: 'red',
    gap: scale(25),
  },
  TextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: moderateScale(4),
    paddingBottom: scale(15),
  },
  text1: {
    fontFamily: 'Urbanist',
    fontWeight: 600,
    fontSize: scale(16),
    color: '#858585',
  },
  text2: {
    fontFamily: 'Urbanist',
    color: 'black',
  },
  linImg: {
    width: SCREEN_WIDTH * 0.9,
    alignItems: 'center',
    alignSelf: 'center',
    // top: verticalScale(25),
    paddingHorizontal: scale(20),
    // backgroundColor: 'red',
  },
  HorizentalLine: {
    width: SCREEN_WIDTH * 0.9,
  },
  btnStyle: {},
});
