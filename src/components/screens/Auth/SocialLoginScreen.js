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
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.mainContainer}>
        <Image
          source={require('../../../assets/imges/logo.png')}
          style={styles.imgStyle}
          resizeMode="contain"
        />

        <Text style={styles.title}>Let's you in</Text>
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
    </View>
  );
};

export default SocialLoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    width: SCREEN_WIDTH * 0.99,
    left: scale(2),
    backgroundColor: 'white',
    paddingTop: verticalScale(31),
    gap: moderateScale(20),
  },

  imgStyle: {
    width: scale(120),
    height: verticalScale(120),
    resizeMode: 'contain',
  },
  authSection: {
    width: SCREEN_WIDTH * 0.94,
    alignItems: 'center',
    gap: moderateScale(20),
  },
  title: {
    fontFamily: 'Montserrat',
    fontWeight: '600',
    fontSize: scale(32),
    textAlign: 'center',
  },
  buttonsWrapper: {
    width: '100%',
    gap: verticalScale(20),
  },
  InnerSectionsContainer: {
    gap: moderateScale(28),
  },
  BottomSide: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: SCREEN_WIDTH * 0.94,
    gap: scale(28),
  },
  TextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: moderateScale(2),
  },
  text1: {
    fontFamily: 'Urbanist',
    fontWeight: 600,
    fontSize: scale(16),
    color: '#858585',
  },
  text2: {
    fontWeight: 600,
    fontFamily: 'Urbanist',
    color: 'black',
  },
  linImg: {
    width: SCREEN_WIDTH * 0.9,
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: scale(20),
  },
  HorizentalLine: {
    width: SCREEN_WIDTH * 0.9,
  },
  btnStyle: {},
});
