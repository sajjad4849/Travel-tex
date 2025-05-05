import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import {Dimensions} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import Inputbox from '../../common/Inputbox';
import Button from '../../common/Button';
import {useNavigation} from '@react-navigation/native';
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const CreateAccount = () => {
  const navigation = useNavigation();
  const NavigationHandler = () => {
    navigation.navigate('OTP');
  };
  return (
    <View>
      <View style={styles.Container}>
        <View>
          <Text style={styles.text1}>Create Your New Account</Text>
        </View>
        <View style={{height: verticalScale(300)}}>
          <View style={styles.form}>
            <View style={{height: verticalScale(90)}}>
              <Text style={styles.lableStyle}>Email</Text>
              <Inputbox
                placeholdar="Enter your email"
                img={require('../../../assets/imges/email-icon.png')}
                style={styles.box}
              />
            </View>
            <View style={{height: verticalScale(90)}}>
              <Text style={styles.lableStyle}>Password</Text>
              <Inputbox
                placeholdar="Enter your Password"
                img={require('../../../assets/imges/pass-icon.png')}
                icon={require('../../../assets/imges/pass-icon2.png')}
                style={styles.box}
              />
            </View>
            <View style={{height: verticalScale(90)}}>
              <Text style={styles.lableStyle}>Confirm Password</Text>
              <Inputbox
                placeholdar="Enter your Password"
                img={require('../../../assets/imges/pass-icon.png')}
                icon={require('../../../assets/imges/pass-icon2.png')}
                style={styles.box}
              />
            </View>
            <Button title="Create New Account" onPress={NavigationHandler} />
          </View>
        </View>
        <View style={styles.ThirdSection}>
          <Image source={require('../../../assets/imges/line.png')} />
          <View style={styles.GoogleAndApple}>
            <View style={styles.googleSection}>
              <View style={styles.googleInnerSection}>
                <Image source={require('../../../assets/imges/google.png')} />
                <Text>With Google</Text>
              </View>
            </View>
            <View style={styles.googleSection}>
              <View style={styles.googleInnerSection}>
                <Image source={require('../../../assets/imges/apple.png')} />
                <Text>With Apple</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={styles.bottomText}>Don't have an account? </Text>
            <Text style={styles.text}>Create Account</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    position: 'absolute',
    width: SCREEN_WIDTH * 0.95,
    height: SCREEN_HEIGHT * 0.86,
    top: SCREEN_HEIGHT * 0.1,
    left: SCREEN_WIDTH * 0.03,
    gap: moderateScale(20),
  },
  text1: {
    fontWeight: 600,
    fontSize: moderateScale(32),
    lineHeight: verticalScale(46),
  },
  lableStyle: {
    fontWeight: 500,
    fontSize: moderateScale(16),
    height: verticalScale(24),
  },
  form: {
    height: verticalScale(348),
    gap: moderateScale(12),
  },
  ThirdSection: {
    height: verticalScale(128),
    gap: moderateScale(20),
    marginTop: verticalScale(32),
  },
  GoogleAndApple: {
    height: verticalScale(60),
    flexDirection: 'row',
    gap: moderateScale(10),
    borderColor: 'blue',
  },
  googleSection: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: moderateScale(12),
    height: verticalScale(60),
    width: scale(158),
  },
  bottomText: {
    textAlign: 'center',
    color: '#858585',
    fontWeight: 400,
    fontSize: scale(14),
  },
  text: {
    color: 'black',
  },
  googleInnerSection: {
    gap: moderateScale(12),
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: {
    height: verticalScale(54),
  },
});
