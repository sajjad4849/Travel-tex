import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {CalendarItemList} from '../../../../src/components/common/SelectAcData';
import ClinderList from '../../common/ClinderList';
import {useNavigation} from '@react-navigation/native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const Home = () => {
  const navigation = useNavigation();
  const NavigationHandler = () => {
    navigation.navigate('EditScreen');
  };
  console.log('...list.......ccc', CalendarItemList);

  const color = '#FFD3C7';
  const color1 = '#57F85766';
  const color2 = '#FF0D0D66';

  return (
    <View>
      <View style={styles.Container}>
        <Text style={styles.home}>Home</Text>
        <View style={styles.imgContainer}>
          <Image
            source={require('../../../assets/imges/notification.png')} // Fixed typo: imges -> images
            style={styles.notificationImg}
          />
        </View>
      </View>
      <View style={styles.ClindarContainer}>
        <View style={styles.ChildContainer}>
          <Text style={styles.ExpenseText}>My expense</Text>
          <View style={styles.IconContainer}>
            <Image
              source={require('../../../assets/imges/filterTab.png')} // Fixed typo
              style={styles.imgStyle}
            />
            <Image
              source={require('../../../assets/imges/pdfTabimg.png')} // Fixed typo
              style={styles.imgStyle}
            />
          </View>
        </View>
        <View style={styles.CliderHeader}>
          <Text style={styles.HeaderText}>Category:</Text>
          <Text style={styles.HeaderText}>Expense Date:</Text>
          <Text style={styles.HeaderText}>Amount:</Text>
          <Text style={styles.HeaderText}>Status:</Text>
        </View>
        <FlatList
          data={CalendarItemList}
          keyExtractor={item => item.id.toString()} // Ensure id is a string
          renderItem={({item}) => (
            <ClinderList
              title={item.title}
              ClinderImg={item.ClinderImg}
              MenueIcon={item.MenueIcon}
              date={item.date}
              dollarImg={item.dollarImg}
              status={item.status}
              Amount={item.Amount}
              Mycolor={
                item.id === 1
                  ? color
                  : item.id === 2 || item.id === 3 || item.id === 4
                  ? color1
                  : color2
              }
            />
          )}
          ItemSeparatorComponent={() => <View style={{height: 10}} />}
        />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnOpactiy} onPress={NavigationHandler}>
          <Image
            source={require('../../../assets/imges/plus.png')}
            style={styles.PlusImg}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  Container: {
    width: SCREEN_WIDTH * 0.9,
    height: verticalScale(50),
    top: verticalScale(60),
    left: scale(20),
    gap: moderateScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  home: {
    fontFamily: 'Montserrat',
    fontWeight: '600',
    fontSize: scale(26),
    lineHeight: verticalScale(39),
  },
  notificationImg: {
    width: scale(24),
    gap: moderateScale(12),
  },
  imgContainer: {
    justifyContent: 'center',
  },
  ClindarContainer: {
    width: SCREEN_WIDTH * 0.94,
    height: verticalScale(350),
    top: verticalScale(90),
    left: scale(10),
    gap: moderateScale(24),
  },
  ChildContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  IconContainer: {
    flexDirection: 'row',
    gap: moderateScale(12),
    width: scale(58),
    justifyContent: 'center',
    alignItems: 'center',
  },
  ExpenseText: {
    fontFamily: 'Montserrat',
    fontWeight: '600',
    fontSize: scale(18),
    lineHeight: verticalScale(26),
  },
  imgStyle: {
    height: verticalScale(22),
    width: scale(21),
  },
  CliderHeader: {
    width: SCREEN_WIDTH * 0.9,
    flexDirection: 'row',
    gap: moderateScale(20),
    left: scale(6),
    height: verticalScale(14),
  },
  HeaderText: {
    color: '#858585',
    fontWeight: '400',
    fontSize: scale(12),
  },
  btnOpactiy: {
    width: scale(64),
    height: verticalScale(56),
    backgroundColor: '#200233',
    borderRadius: 100,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 6,

    elevation: 5,
  },

  PlusImg: {
    width: scale(32),
    height: verticalScale(32),
    // top: verticalScale(12),
    // left: scale(16),
    color: 'white',
    resizeMode: 'contain',
  },

  btnContainer: {
    width: scale(60),
    height: verticalScale(60),
    top: verticalScale(135),
    left: scale(275),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
