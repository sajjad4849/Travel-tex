import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
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
  const HandleNavigation = () => {
    console.log('HandleNavigation.....clicked');
    navigation.navigate('SocialLoginScreen');
  };
  useEffect(() => {
    if (activeId) {
      HandleNavigation();
    }
  }, [activeId]);
  console.log('ActiveID:', activeId);
  const handleCardPress = id => {
    setActiveId(id);
  };
  return (
    <View>
      <View style={styles.FirstContainer}>
        <View style={styles.SecondContainer}>
          <Text style={styles.text}>Select your Account</Text>
          <View style={{height: verticalScale(48)}}>
            <Text style={styles.descriptionStyle}>
              Select the account type that best describes you for Travel Tax
              Complaint!
            </Text>
          </View>
        </View>
        <View style={{gap: 20}}>
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
    position: 'absolute',
    top: 80,
    // borderWidth: 2,
    left: 20,
  },
  SecondContainer: {
    gap: verticalScale(20),
  },
  text: {
    fontWeight: 600,
    fontSize: scale(32),
  },
  descriptionStyle: {
    fontWeight: 400,
    fontSize: scale(16),
    color: '#858585',
  },
  activeCard: {
    backgroundColor: '#200233',
  },
  // titleStyle: {
  //   color: 'white',
  // },
});
