import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
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
  const BackHandlerfun = () => {
    navigation.goBack();
  };
  return (
    <View>
      <TouchableOpacity onPress={BackHandlerfun}>
        <View style={styles.BackImgContainer}>
          <Image
            source={require('../../../assets/imges/Back.png')}
            style={styles.imgModify}
          />
        </View>
      </TouchableOpacity>

      <View style={styles.Container}>
        <View style={styles.HeadingText}>
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
          <View style={styles.ThirdContainerImg}>
            <Image
              source={require('../../../assets/imges/line.png')}
              style={styles.imgeStyling}
            />
          </View>

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
  BackImgContainer: {
    width: scale(24),
    height: verticalScale(24),
    top: verticalScale(30),
    left: scale(20),
  },
  imgModify: {
    width: scale(22),
    height: verticalScale(16),
  },
  Container: {
    flex: 1,
    position: 'absolute',
    width: SCREEN_WIDTH * 0.93,
    height: SCREEN_HEIGHT * 0.92,
    top: verticalScale(52),
    // top: SCREEN_HEIGHT * 0.1,
    left: SCREEN_WIDTH * 0.04,
    gap: moderateScale(30),
    // borderWidth: 2,
  },
  HeadingText: {
    gap: moderateScale(4),
    height: verticalScale(92),
  },
  text1: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: scale(32),
    lineHeight: verticalScale(46),
  },
  lableStyle: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: scale(16),
    height: verticalScale(24),
    marginBottom: 6,
  },
  form: {
    width: SCREEN_WIDTH * 0.93,
    height: verticalScale(355),
    gap: moderateScale(12),
    // borderWidth: 2,
    // borderColor: 'blue',
  },
  ThirdSection: {
    width: SCREEN_WIDTH * 0.93,
    // borderWidth: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: verticalScale(144),
    gap: moderateScale(20),
    marginTop: verticalScale(32),
  },
  ThirdContainerImg: {
    width: SCREEN_WIDTH * 0.93,
  },
  imgeStyling: {
    width: SCREEN_WIDTH * 0.93,
  },
  GoogleAndApple: {
    width: SCREEN_WIDTH * 0.93,
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
    width: scale(155),
  },
  bottomText: {
    fontFamily: 'Montserrat',
    textAlign: 'center',
    color: '#858585',
    fontWeight: 400,
    fontSize: scale(14),
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
  box: {
    height: verticalScale(54),
  },
});
