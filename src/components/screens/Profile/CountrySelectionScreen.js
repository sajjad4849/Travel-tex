import {
  View,
  StyleSheet,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {ProgressBar} from 'react-native-paper';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {Dimensions} from 'react-native';
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
import React, {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {SelectCountry} from '../../../components/common/Dropdownlist';
import {useNavigation} from '@react-navigation/native';
import Button from '../../common/Button';
import {red900} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
const CountrySelectionScreen = () => {
  console.log('list........', SelectCountry);
  const [IsSelectCountry, setIsSelectCountry] = useState('Select country');
  const [IsdropDown, setIsdropDown] = useState(false);
  const navigation = useNavigation();
  const NavigationHandler = () => {
    navigation.navigate('SetProfile');
  };
  const SelecteValueHandler = item => {
    console.log('my reciving id here .........', item);
    setIsSelectCountry(item.name);
  };
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
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
        <Text style={styles.profile}>Set up Profile</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur. Euismod adipiscing arcu
          porttitor
        </Text>
      </View>
      <View style={styles.SecondContainer}>
        <View style={styles.DropdownContainer}>
          <TouchableOpacity
            style={styles.DropDown}
            onPress={() => setIsdropDown(!IsdropDown)}>
            <View style={styles.DronDownInner}>
              <Text>{IsSelectCountry}</Text>
              <Image
                source={require('../../../assets/imges/dropdownIcon.png')}
                style={[
                  styles.img2,
                  {transform: [{rotate: IsdropDown ? '180deg' : '0deg'}]},
                ]}
              />
            </View>
          </TouchableOpacity>
          {IsdropDown ? (
            <View style={styles.ListView}>
              <FlatList
                data={SelectCountry}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                  console.log('.........itemmmmmmmmm', item);
                  return (
                    <TouchableOpacity onPress={() => SelecteValueHandler(item)}>
                      <View
                        style={[
                          styles.listCountry,
                          item.id === 7 && {borderBottomWidth: 0},
                        ]}>
                        <View>
                          <Image source={item.img} style={styles.flagIcon} />
                        </View>
                        <Text style={styles.NameText}>{item.name}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                }}
                ItemSeparatorComponent={() => <View style={{height: 5}} />}
              />
            </View>
          ) : null}
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
  Container: {
    backgroundColor: 'white',
    width: SCREEN_WIDTH * 0.9,
    height: verticalScale(96),
    position: 'absolute',
    top: verticalScale(100),
    left: scale(20),
    gap: moderateScale(15),
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
    height: verticalScale(360),
    position: 'absolute',
    top: verticalScale(216),
    left: 20,
    gap: moderateScale(12),
  },
  DropDown: {
    width: SCREEN_WIDTH * 0.9,
    height: verticalScale(54),
    borderWidth: 1,
    borderRadius: moderateScale(80),
    gap: moderateScale(12),
    justifyContent: 'center',
  },
  DronDownInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
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
  img2: {
    transform: [{rotate: '180deg'}],
  },
  ListView: {
    width: SCREEN_WIDTH * 0.9,
    height: verticalScale(292),
    // borderWidth: 1,
    position: 'absolute',
    top: verticalScale(60),
    // borderColor: 'red',
  },
  listCountry: {
    width: scale(250),
    height: verticalScale(34),
    flexDirection: 'row',
    gap: moderateScale(12),
    left: scale(20),
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    top: verticalScale(20),
  },
  flagIcon: {
    width: scale(36),
    height: verticalScale(24),
    resizeMode: 'contain',
  },
  NameText: {
    fontWeight: '500',
    fontSize: scale(14),
    fontFamily: 'Montserrat',
  },
});
