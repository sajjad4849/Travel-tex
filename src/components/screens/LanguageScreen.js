import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
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
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.TopContainer}>
        <Text style={styles.styleText}>Select Your language</Text>
        <View style={styles.ChildContainer}>
          <Text style={styles.textDescription}>
            Select Your preferred language to ensure a smooth experience
            throught the app. Chose between Enlish or Franch to seamless
            navigation
          </Text>
        </View>
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
              <Text>Spanish</Text>
            </View>
            <View>
              <TouchableOpacity style={styles.radioOuter}>
                <View style={styles.radioInner} />
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
              <Text>English</Text>
            </View>
            <View>
              <TouchableOpacity style={styles.radioOuter}>
                <View style={styles.radioInner} />
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
    top: 87,
    gap: 12,
    width: SCREEN_WIDTH * 0.9,
    height: verticalScale(102),
    // borderWidth: 2,
  },
  styleText: {
    fontWeight: 600,
    fontSize: moderateScale(20),
    lineHeight: moderateScale(30),
  },
  ChildContainer: {
    width: '100%',
    height: verticalScale(60),
    position: 'relative',
    top: 10,
  },
  textDescription: {
    fontWeight: 300,
    fontSize: moderateScale(14),
    lineHeight: moderateScale(20),
    textAlign: 'justify',
    // borderWidth: 2,
    color: '#858585',
  },
  // here is language container css
  languageContainer: {
    width: SCREEN_WIDTH * 0.85,
    height: verticalScale(160),
    position: 'absolute',
    top: 238,
    let: 24,
    gap: 30,
    // borderWidth: 2,
    // borderColor: 'red',
  },
  childLanguageContainer: {
    width: '100%',
    height: verticalScale(62),
    borderRadius: moderateScale(12),
    borderWidth: 1,
    position: 'relative',
    justifyContent: 'center',
    // bottom: 18,
  },
  childLanguageContainer2: {
    width: '100%',
    height: verticalScale(62),
    borderRadius: moderateScale(12),
    borderWidth: 1,
    position: 'relative',
    justifyContent: 'center',
    // bottom: 18,
  },
  seconChild: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    marginHorizontal: 15,
  },
  innerLeftside: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  imgStyle: {
    width: scale(39),
    height: verticalScale(26),
    backgroundColor: 'gray',
  },
  radioOuter: {
    width: scale(14),
    height: verticalScale(14),
    borderRadius: scale(14) / 1,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  radioInner: {
    width: scale(9.33),
    height: verticalScale(9.33),
    borderRadius: scale(9.33) / 2,
    // backgroundColor: '#000',
  },
  btn: {
    width: SCREEN_WIDTH * 0.9,
    height: verticalScale(54),
    position: 'absolute',
    bottom: 70,
    // borderWidth: 2,
  },
});
