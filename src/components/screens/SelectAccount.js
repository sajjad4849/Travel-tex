import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {Dimensions} from 'react-native';
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
import Card from '../common/Card';
import {AccountList} from '../common/SelectAcData';
import {useNavigation} from '@react-navigation/native';
const SelectAccount = () => {
  const [activeId, setActiveId] = useState(null);
  const navigation = useNavigation();
  // Navigation
  const HandleNavigation = () => {
    console.log('HandleNavigation.....clicked');
    navigation.navigate('SocialLoginScreen');
  };
  // BackNavigation
  const NavBackHandler = () => {
    console.log('.......click');
    navigation.goBack();
  };
  useEffect(() => {
    if (activeId) {
      HandleNavigation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId]);
  console.log('ActiveID:', activeId);
  const handleCardPress = id => {
    setActiveId(id);
  };
  return (
    <View>
      <View style={styles.BackIconContainer}>
        <TouchableOpacity onPress={NavBackHandler}>
          <Image
            source={require('../../assets/imges/Back.png')}
            style={styles.ImgStyling}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.FirstContainer}>
        <View style={styles.SecondContainer}>
          <Text style={styles.text}>Select your Account</Text>
        </View>
        <View style={styles.SecondPara}>
          <Text style={styles.descriptionStyle}>
            Select the account type that best describes you for Travel Tax
            Complaint!
          </Text>
        </View>

        <View style={styles.MapContainer}>
          {AccountList.map(item => (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                handleCardPress(item.id);
              }}>
              <Card
                img={item.img}
                title={item.title}
                subtitle={item.subtitle}
                titleColor={activeId === item.id ? 'white' : 'black'}
                style={activeId === item.id ? styles.activeCard : null}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default SelectAccount;

const styles = StyleSheet.create({
  FirstContainer: {
    width: SCREEN_WIDTH * 0.9,
    maxHeight: verticalScale(638),
    aspectRatio: 0.6,
    top: verticalScale(70),
    // borderWidth: 2,
    left: scale(20),
  },
  SecondContainer: {
    width: SCREEN_WIDTH * 0.9,
    height: verticalScale(46),
    gap: verticalScale(20),
  },
  text: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: scale(32),
    lineHeight: 46,
  },
  SecondPara: {
    width: SCREEN_WIDTH * 0.9,
    height: verticalScale(48),
    // top: verticalScale(66),
  },
  descriptionStyle: {
    fontFamily: 'Montserrat',
    fontWeight: 400,
    fontSize: scale(16),
    color: '#858585',
  },
  activeCard: {
    backgroundColor: '#200233',
  },
  MapContainer: {
    gap: moderateScale(20),
  },
  BackIconContainer: {
    left: scale(20),
    top: verticalScale(20),
  },
  ImgStyling: {
    height: verticalScale(24),
    width: scale(24),
    resizeMode: 'contain',
  },
  // titleStyle: {
  //   color: 'white',
  // },
});
