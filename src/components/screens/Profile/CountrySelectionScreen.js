import {View, StyleSheet, Text, Image} from 'react-native';
import {ProgressBar} from 'react-native-paper';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {Dimensions} from 'react-native';
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
import React, {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {SelectCountry} from '../../../components/common/Dropdownlist';
import {useNavigation} from '@react-navigation/native';
import Button from '../../common/Button';
const CountrySelectionScreen = () => {
  console.log('list........', SelectCountry);
  const [IsSelectCountry, setIsSelectCountry] = useState(null);
  const navigation = useNavigation();
  const NavigationHandler = () => {
    navigation.navigate('SetProfile');
  };
  return (
    <View>
      <View style={styles.wrapper}>
        <ProgressBar progress={0.5} style={styles.bar} color="#200233" />
      </View>
      <View style={styles.Container}>
        <Text style={styles.profile}>Set up Profile</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur. Euismod adipiscing arcu
          porttitor
        </Text>
      </View>
      <View style={styles.SecondContainer}>
        <View style={styles.DropdownContainer}>
          <Dropdown
            data={SelectCountry}
            placeholderStyle={styles.placehorder}
            placeholder="Select country"
            search
            searchPlaceholder="Select your country"
            value={IsSelectCountry}
            labelField="name"
            valueField="id"
            onChange={item => setIsSelectCountry(item.id)}
            renderItem={item => {
              console.log('.......item.......', item);
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    height: 54,
                    gap: 12,
                    left: 20,
                  }}>
                  <Image
                    source={{uri: item.img}}
                    style={{width: 30, height: 30}}
                  />

                  <Text>{String(item.name)}</Text>
                </View>
              );
            }}
          />
        </View>
        <View style={styles.btnContainer}>
          <Button title="Continue" onPress={NavigationHandler} />
        </View>
      </View>
    </View>
  );
};

export default CountrySelectionScreen;

const styles = StyleSheet.create({
  wrapper: {
    width: '80%',
  },
  bar: {
    height: 8,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#ddd',
  },
  Container: {
    width: SCREEN_WIDTH * 0.9,
    height: verticalScale(96),
    top: 124,
    left: 20,
    gap: moderateScale(18),
    // borderWidth: 2,
  },
  profile: {
    height: verticalScale(36),
    fontWeight: '600',
    fontSize: scale(24),
    lineHeight: verticalScale(36),
    textAlign: 'center',
  },
  text: {
    height: verticalScale(48),
    fontWeight: '400',
    fontSize: scale(16),
    lineHeight: verticalScale(24),
    color: '#858585',
    textAlign: 'center',
  },
  SecondContainer: {
    width: SCREEN_WIDTH * 0.9,
    height: verticalScale(390),
    top: 170,
    left: 20,
    gap: moderateScale(12),
    // borderWidth: 2,
  },
  DropdownContainer: {
    padding: 10,
    height: verticalScale(54),
    borderWidth: 1,
    borderRadius: moderateScale(80),
    justifyContent: 'center',
    paddingRight: 20,
    gap: 12,
    color: 'red',
  },
  placehorder: {
    height: verticalScale(34),
  },
  input: {
    width: SCREEN_WIDTH * 0.9,
    height: verticalScale(54),
    borderWidth: 1,
    borderRadius: moderateScale(80),
  },
  btnContainer: {
    top: 350,
  },
});
