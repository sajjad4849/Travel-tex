import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {Dimensions} from 'react-native';
import Inputbox from '../../common/Inputbox';
import Button from '../../common/Button';
import {useNavigation} from '@react-navigation/native';
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const SetProfile = () => {
  const navigation = useNavigation();
  const NavigaterFun = () => {
    navigation.navigate('CompleteProfile');
  };
  return (
    <View>
      <View style={styles.Container}>
        <View style={styles.childContainer}>
          <Text style={styles.textHeading}>Set up Profile</Text>
          <Text style={styles.paragraph}>
            {
              'Lorem ipsum dolor sit amet consectetur. Euismod adipiscing arcu porttitor.'
            }
          </Text>
          <View style={styles.imgContainer}>
            <Image
              source={require('../../../assets/imges/Avatar.png')}
              style={styles.imgStyle}
            />
            <Image
              source={require('../../../assets/imges/camera.png')}
              style={styles.CameraStyle}
            />
          </View>
        </View>
        <View style={styles.Container2}>
          <View>
            <Text style={styles.labelStyle}>Full Name</Text>
            <Inputbox
              placeholdar="Enter your name"
              img={require('../../../assets/imges/name-pic.png')}
              style={styles.box}
            />
          </View>
          <View>
            <Text style={styles.labelStyle}>Location</Text>
            <Inputbox
              img={require('../../../assets/imges/location.png')}
              placeholdar="Select your location"
              style={styles.box}
            />
          </View>
          <View>
            <Text style={styles.labelStyle}>Name</Text>
            <Inputbox
              placeholdar="Enter your phone"
              img={require('../../../assets/imges/phone.png')}
              style={styles.box}
            />
          </View>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Button title="Continue" onPress={NavigaterFun} />
      </View>
    </View>
  );
};

export default SetProfile;

const styles = StyleSheet.create({
  Container: {
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_HEIGHT * 0.7,
    top: 124,
    left: 20,
    // borderWidth: 2,
    // backgroundColor: 'green',
  },
  childContainer: {
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_HEIGHT * 0.3,
    gap: 20,
    // borderWidth: 2,
    // borderColor: 'red',
  },
  textHeading: {
    height: verticalScale(36),
    fontWeight: '600',
    fontSize: scale(24),
    lineHeight: verticalScale(36),
    textAlign: 'center',
  },
  imgContainer: {
    alignSelf: 'center',
    width: scale(100),
    height: verticalScale(80),
  },
  paragraph: {
    height: verticalScale(48),
    fontWeight: '400',
    fontSize: scale(16),
    lineHeight: verticalScale(24),
    color: '#858585',
    textAlign: 'center',
  },
  imgStyle: {
    width: scale(100),
    height: verticalScale(80),
    resizeMode: 'contain',
  },
  CameraStyle: {
    position: 'absolute',
    top: 60,
    left: 90,
  },
  Container2: {
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_HEIGHT * 0.4,
    // borderWidth: 2,
    gap: moderateScale(20),
  },
  labelStyle: {
    fontFamily: '500',
    fontSize: scale(16),
    lineHeight: verticalScale(24),
  },
  btnContainer: {
    width: SCREEN_WIDTH * 0.9,
    left: 20,
    top: 160,
  },
});
