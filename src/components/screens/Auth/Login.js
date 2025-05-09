import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {use, useState} from 'react';
import {Dimensions} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import Inputbox from '../../common/Inputbox';
import ToggleSwitch from 'toggle-switch-react-native';
import Button from '../../common/Button';
import {useNavigation} from '@react-navigation/native';
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const Login = () => {
  const [isOn, setisOn] = useState(false);
  const handleTogle = () => {
    setisOn(!isOn);
  };
  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.navigate('CreateAccount');
  };
  const BackHandler = () => {
    navigation.goBack();
  };
  return (
    <View>
      <TouchableOpacity onPress={BackHandler}>
        <View style={styles.backImgContainer}>
          <Image
            source={require('../../../assets/imges/Back.png')}
            style={styles.img}
          />
        </View>
      </TouchableOpacity>

      <View style={styles.Container}>
        <View style={styles.HeadingContainer}>
          <Text style={styles.text1}>Login to Your Account</Text>
        </View>
        <View style={styles.FormContainer}>
          <View style={styles.form}>
            <View style={{height: verticalScale(90)}}>
              <Text style={styles.lableStyle}>Email</Text>
              <Inputbox
                placeholdar="Enter your Email"
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
            <View style={styles.textContainer}>
              <View style={styles.toggleContainer}>
                <ToggleSwitch
                  isOn={isOn}
                  onColor="green"
                  offColor="gray"
                  size="small"
                  onToggle={handleTogle}
                  style={styles.toggleIcon}
                />
                <Text style={styles.RememberText}>Remember me</Text>
              </View>
              <View>
                <Text style={styles.forgetText}>Forget password?</Text>
              </View>
            </View>
          </View>
          <View style={styles.btnContainer}>
            <Button title="Login" onPress={handleNavigation} />
          </View>
        </View>
        <View style={styles.ThirdSection}>
          <View style={styles.ImageContainerONe}>
            <View style={styles.ImageParent}>
              <Image
                source={require('../../../assets/imges/line.png')}
                style={styles.imgStyle}
              />
            </View>
          </View>

          <View style={styles.GoogleAndApple}>
            <View style={styles.googleSection}>
              <View style={styles.googleInnerSection}>
                <Image source={require('../../../assets/imges/google.png')} />
                <Text style={styles.GoogleText}>With Google</Text>
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

export default Login;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    position: 'absolute',
    width: SCREEN_WIDTH * 0.93,
    // height: SCREEN_HEIGHT * 0.78,
    height: verticalScale(600),
    top: SCREEN_HEIGHT * 0.1,
    left: SCREEN_WIDTH * 0.04,
    gap: moderateScale(20),
    // borderWidth: 2,
  },
  HeadingContainer: {
    width: SCREEN_WIDTH * 0.93,
    height: verticalScale(92),
    // borderWidth: 2,
  },
  backImgContainer: {
    width: scale(24),
    height: verticalScale(24),
    top: verticalScale(30),
    left: scale(20),
  },
  img: {
    width: scale(22),
    height: verticalScale(16),
  },
  text1: {
    fontWeight: 600,
    fontSize: moderateScale(32),
    lineHeight: verticalScale(46),
    fontFamily: 'Montserrat',
  },
  FormContainer: {
    width: SCREEN_WIDTH * 0.93,
    height: verticalScale(300),
    // borderWidth: 2,
    // borderColor: 'blue',
  },
  RememberText: {
    fontFamily: 'Montserrat',
    fontWeight: '300',
    fontSize: scale(14),
    color: '#858585',
  },
  forgetText: {
    fontFamily: 'Montserrat',
    fontWeight: '300',
    fontSize: scale(14),
    color: '#FF5E5E',
  },
  lableStyle: {
    fontWeight: 500,
    fontSize: moderateScale(16),
    height: verticalScale(24),
    fontFamily: 'Montserrat',
  },
  form: {
    height: verticalScale(232),
    gap: moderateScale(12),
  },
  textContainer: {
    width: SCREEN_WIDTH * 0.9,
    height: verticalScale(18),
    marginHorizontal: scale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth: 2,
  },
  toggleContainer: {
    flexDirection: 'row',
    gap: moderateScale(20),
    // borderWidth: 1,
    // borderColor: 'blue',
    // height: verticalScale(18),
    width: scale(194),
  },
  toggleIcon: {
    resizeMode: 'contain',
    width: scale(30),
  },
  btnContainer: {
    position: 'relative',
    top: 14,
  },
  ThirdSection: {
    flex: 1,
    width: SCREEN_WIDTH * 0.94,
    height: verticalScale(114),
    gap: moderateScale(20),
    // borderWidth: 2,
  },
  ImageContainerONe: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageParent: {
    width: SCREEN_WIDTH * 0.9,
    alignItems: 'center',
    alignSelf: 'center',
    // top: verticalScale(25),
    paddingHorizontal: scale(20),
    // backgroundColor: 'red',
  },
  imgStyle: {
    width: SCREEN_WIDTH * 0.9,
    // borderWidth: 2,
  },
  GoogleText: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: scale(16),
  },
  GoogleAndApple: {
    height: verticalScale(60),
    flexDirection: 'row',
    gap: moderateScale(10),
    // borderColor: 'blue',
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
    fontFamily: 'Montserrat',
  },
  text: {
    color: 'black',
    fontFamily: 'Montserrat',
  },
  googleInnerSection: {
    gap: moderateScale(12),
    flexDirection: 'row',
    alignItems: 'center',
  },
  // box: {
  //   height: verticalScale(54),
  //   width: SCREEN_WIDTH * 0.9,
  //   borderWidth: 1,
  // },
});
