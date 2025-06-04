import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import {ProgressBar} from 'react-native-paper';
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
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* <StatusBar backgroundColor="white" barStyle="dark-content" /> */}
      <View style={styles.wrapper}>
        <View style={styles.backImgContainer}>
          <Image
            source={require('../../../assets/imges/Back.png')}
            style={styles.img}
          />
        </View>
        <ProgressBar progress={0.5} style={styles.bar} color="#200233" />
      </View>
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
  wrapper: {
    position: 'absolute',
    top: verticalScale(10),
    width: SCREEN_WIDTH * 0.91,
    left: scale(20),
    // borderWidth: 1,
    // alignSelf: 'center',
  },
  bar: {
    width: SCREEN_WIDTH * 0.79,
    left: scale(40),
    height: verticalScale(8),
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#ddd',
  },
  backImgContainer: {
    width: scale(24),
    height: verticalScale(24),
    top: verticalScale(20),
    // left: scale(20),
  },
  img: {
    width: scale(22),
    height: verticalScale(16),
  },
  Container: {
    width: SCREEN_WIDTH * 0.93,
    height: verticalScale(550),
    top: verticalScale(70),
    position: 'absolute',
    left: scale(15),
    // borderWidth: 2,
    // backgroundColor: 'green',
  },
  childContainer: {
    width: SCREEN_WIDTH * 0.93,
    height: verticalScale(240),
    gap: 20,
    // borderWidth: 2,
    // borderColor: 'red',
  },
  textHeading: {
    fontFamily: 'Montserrat',
    height: verticalScale(36),
    fontWeight: '600',
    fontSize: scale(24),
    lineHeight: verticalScale(36),
    textAlign: 'center',
  },
  paragraph: {
    fontFamily: 'Montserrat',
    height: verticalScale(48),
    fontWeight: '400',
    fontSize: scale(16),
    lineHeight: verticalScale(24),
    color: '#858585',
    textAlign: 'center',
    // borderWidth: 1,
  },
  imgContainer: {
    alignSelf: 'center',
    width: scale(140),
    height: verticalScale(140),
    // borderWidth: 1,
  },
  CameraStyle: {
    position: 'absolute',
    width: scale(25),
    height: verticalScale(25),
    top: verticalScale(70),
    left: scale(100),
    // borderWidth: 1,
  },

  imgStyle: {
    width: scale(120),
    height: verticalScale(120),
    resizeMode: 'contain',
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
    position: 'absolute',
    width: SCREEN_WIDTH * 0.9,
    left: scale(20),
    top: verticalScale(620),
  },
});
