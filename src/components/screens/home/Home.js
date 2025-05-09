import React, {useState} from 'react';
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
import ActionMenuModal from '../../common/ActionMenuModal';
import FilterOptionsModal from '../../common/FilterOptionsModal';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const Home = () => {
  const navigation = useNavigation();
  const NavigationHandler = () => {
    navigation.navigate('EditScreen');
  };
  const [IsModal, setIsModal] = useState(false);
  const [IsFilterModal, setIsFilterModal] = useState(false);
  const color = '#FFD3C7';
  const color1 = '#57F85766';
  const color2 = '#FF0D0D66';
  const HandleModel = () => {
    console.log('my onPress is called for model handling');
    setIsModal(!IsModal);
  };

  console.log(IsModal, 'state value');
  const HandlePop = () => {
    setIsFilterModal(!IsFilterModal);
  };
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <FilterOptionsModal
        isVisible={IsFilterModal}
        onClose={() => setIsFilterModal(false)}
      />
      <ActionMenuModal isVisible={IsModal} onClose={() => setIsModal(false)} />
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
            <TouchableOpacity onPress={HandlePop}>
              <Image
                source={require('../../../assets/imges/filterTab.png')} // Fixed typo
                style={styles.imgStyle}
              />
            </TouchableOpacity>

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
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <ClinderList
              title={item.title}
              ClinderImg={item.ClinderImg}
              MenueIcon={item.MenueIcon}
              onPress={HandleModel}
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
          ItemSeparatorComponent={() => (
            <View style={{height: 10, elevation: 2}} />
          )}
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
    top: verticalScale(10),
    left: scale(20),
    gap: moderateScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  home: {
    fontFamily: 'Montserrat',
    fontWeight: '600',
    fontSize: scale(20),
    lineHeight: verticalScale(39),
  },
  notificationImg: {
    width: scale(20),
    gap: moderateScale(12),
  },
  imgContainer: {
    justifyContent: 'center',
  },
  ClindarContainer: {
    width: SCREEN_WIDTH * 0.94,
    height: verticalScale(370),
    top: verticalScale(40),
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
    height: verticalScale(18),
    width: scale(15),
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
    width: scale(50),
    height: verticalScale(49),
    backgroundColor: '#200233',
    borderRadius: 100,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },

  PlusImg: {
    width: scale(28),
    height: verticalScale(28),
    color: 'white',
    resizeMode: 'contain',
  },

  btnContainer: {
    width: scale(60),
    height: verticalScale(60),
    top: verticalScale(115),
    left: scale(282),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
