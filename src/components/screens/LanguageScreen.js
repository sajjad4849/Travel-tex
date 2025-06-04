import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {Dimensions} from 'react-native';
import Button from '../common/Button';
import {useNavigation} from '@react-navigation/native';
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const LanguageScreen = () => {
  const navigation = useNavigation();
  const NavigateHandler = () => {
    navigation.navigate('OnboardingScreen');
  };
  const [Ischeck, setIscheck] = useState('option1');
  const handleCheckbox = () => {
    setIscheck('option1');
  };

  const handleChexk2 = () => {
    setIscheck('option2');
  };

  const radioColor = {
    color: '#FF5E5E',
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.TopContainer}>
        <Text style={styles.styleText}>Select Your language</Text>
        <Text style={styles.textDescription}>
          Select Your preferred language to ensure a smooth experience throught
          the app. Chose between Enlish or Franch to seamless navigation
        </Text>
      </View>
      {/* langa   */}
      <View style={styles.languageContainer}>
        <View style={styles.childLanguageContainer}>
          <View style={styles.seconChild}>
            <View style={styles.innerLeftside}>
              <Image
                source={require('../../../src/assets/imges/spain.png')}
                style={styles.imgStyle}
              />
              <Text style={styles.countryName}>Spanish</Text>
            </View>
            <View>
              <TouchableOpacity
                style={styles.radioOuter}
                onPress={handleCheckbox}>
                <View
                  style={[
                    styles.radioInner,
                    {
                      backgroundColor:
                        Ischeck === 'option1' ? radioColor.color : 'white',
                    },
                  ]}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.childLanguageContainer2}>
          <View style={styles.seconChild}>
            <View style={styles.innerLeftside}>
              <Image
                source={require('../../../src/assets/imges/united-states.png')}
                style={styles.imgStyle}
              />
              <Text style={styles.countryName}>English</Text>
            </View>
            <View>
              <TouchableOpacity
                style={styles.radioOuter}
                onPress={handleChexk2}>
                <View
                  style={[
                    styles.radioInnerSecond,
                    {
                      backgroundColor:
                        Ischeck === 'option2' ? radioColor.color : 'white',
                    },
                  ]}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      {/* button design start from here */}
      <View style={styles.btn}>
        <Button title="Continue" onPress={NavigateHandler} />
      </View>
    </View>
  );
};

export default LanguageScreen;

const styles = StyleSheet.create({
  TopContainer: {
    position: 'absolute',
    top: 60,
    gap: 12,
    width: SCREEN_WIDTH * 0.9,
    // height: verticalScale(102),
    // borderWidth: 2,
  },
  styleText: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    color: '#200233',
    fontSize: moderateScale(20),
    // lineHeight: moderateScale(30),
  },
  countryName: {
    fontFamily: 'Lato',
    fontWeight: scale(400),
    fontSize: scale(16),
  },
  textDescription: {
    fontWeight: 300,
    fontSize: moderateScale(14),
    lineHeight: moderateScale(20),
    textAlign: 'justify',
    color: '#858585',
  },
  // here is language container css
  languageContainer: {
    width: SCREEN_WIDTH * 0.9,
    // height: verticalScale(160),
    position: 'absolute',
    top: 185,
    gap: 16,
    // borderWidth: 2,
    // borderColor: 'red',
  },
  childLanguageContainer: {
    width: '100%',
    height: verticalScale(56),
    borderRadius: moderateScale(12),
    borderWidth: 1,
    borderColor: '#E1E1E1',
    position: 'relative',
    justifyContent: 'center',
    // bottom: 18,
  },
  childLanguageContainer2: {
    width: '100%',
    height: verticalScale(56),
    borderRadius: moderateScale(12),
    borderWidth: 1,
    borderColor: '#E1E1E1',
    position: 'relative',
    justifyContent: 'center',
  },
  seconChild: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  innerLeftside: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  imgStyle: {
    width: scale(39),
    // height: verticalScale(26),
    backgroundColor: 'gray',
  },
  radioOuter: {
    width: scale(14),
    height: verticalScale(14),
    borderRadius: scale(14) / 1,
    borderWidth: 1,
    borderColor: '#FF5E5E',
    alignItems: 'center',
    justifyContent: 'center',
  },

  radioInner: {
    width: scale(9.33),
    height: verticalScale(9.33),
    borderRadius: scale(10),
  },
  radioInnerSecond: {
    width: scale(9.33),
    height: verticalScale(9.33),
    borderRadius: scale(20),
  },
  btn: {
    width: SCREEN_WIDTH * 0.9,
    // height: verticalScale(54),
    position: 'absolute',
    bottom: 70,
    // borderWidth: 2,
  },
});
