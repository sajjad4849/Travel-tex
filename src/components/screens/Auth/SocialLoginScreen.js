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
      <View style={styles.authSection}>
        <Text style={styles.title}>Let's you in</Text>

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
        <View
          style={{
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 10,
            paddingHorizontal: scale(20),
          }}>
          <Image
            source={require('../../../assets/imges/line.png')}
            style={{paddingHorizontal: scale(20)}}
          />
        </View>
        <View>
          <Button title="Login" onPress={handleNavigation} />
        </View>
        <View>
          <Text style={styles.text1}>
            Don't have an account?<Text style={styles.text2}>Sig Up</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SocialLoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: scale(15),
    paddingTop: verticalScale(60),
    paddingBottom: verticalScale(30),
    // justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 2,
  },
  logoSection: {
    alignItems: 'center',
  },
  imgStyle: {
    width: scale(120),
    height: verticalScale(120),
  },
  authSection: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontWeight: '600',
    fontSize: scale(28),
    marginBottom: verticalScale(24),
    textAlign: 'center',
  },
  buttonsWrapper: {
    width: '100%',
    gap: verticalScale(16),
    // borderWidth: 2,
  },

  BottomSide: {
    flex: 1,
    // borderWidth: 2,
    width: '100%',
    gap: scale(25),
  },
  text1: {
    textAlign: 'center',
    fontWeight: 600,
    fontSize: scale(16),
    color: '#858585',
  },
  text2: {
    color: 'black',
  },
});
