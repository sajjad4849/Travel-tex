import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import {ProgressBar} from 'react-native-paper';
import React, {useEffect, useState} from 'react';
import {VechilList} from '../../common/SelectAcData';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {Dimensions} from 'react-native';
import VichleCard from '../../common/VichleCard';
import Button from '../../common/Button';
import Inputbox from '../../common/Inputbox';
import ModelComponent from '../../common/ModelComponent';
import {useNavigation} from '@react-navigation/native';
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const CompleteProfile = () => {
  const [ModalVisibal, setModalVisibal] = useState(false);
  const ModelHnadler = () => {
    setModalVisibal(true);
  };
  const navigation = useNavigation();
  const navigationHandler = () => {
    navigation.navigate('SubScription');
  };
  useEffect(() => {
    console.log('Model is:', ModalVisibal ? 'open' : 'Closed');
  }, [ModalVisibal]);
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
        <ProgressBar progress={0.9} style={styles.bar} color="#200233" />
      </View>
      <ModelComponent
        visible={ModalVisibal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisibal(false)}
        onPress={navigationHandler}
      />
      <Text style={styles.Headingtext}>Add Vehicle Details!</Text>
      <View style={styles.ParentContainer}>
        <View style={styles.Container}>
          <Text style={styles.heading}>Select Vehicle Type:</Text>
          <View>
            <FlatList
              data={VechilList}
              renderItem={({item}) => {
                return (
                  <VichleCard id={item.id} title={item.title} img={item.img} />
                );
              }}
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={{width: 10}} />}
            />
          </View>
        </View>
        <View style={styles.secondContainer}>
          <Text style={styles.labelText}>Vehicle Model:</Text>
          <View>
            <Inputbox placeholdar="Example: audi S Class, 2021" />
          </View>
        </View>
        {/* Vechicle Owned start here */}
        <View style={styles.ThirdContainer}>
          <Text style={styles.VechileOwnedText}>Vehicle Owned by:</Text>
          <View style={styles.VichelOwnedParentContainer}>
            <View style={styles.VichleContainer}>
              <Text style={styles.VechileOwnedChildText}>Owned by me</Text>
              <TouchableOpacity>
                <View style={styles.checkboxOuter}>
                  <View style={styles.checkboxInner} />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.VichleContainer}>
              <Text style={styles.VechileOwnedChildText}>
                Vehicle on leased
              </Text>
              <TouchableOpacity>
                <View style={styles.checkboxOuter}>
                  <View style={styles.checkboxInner} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* Vechicle Owned end here */}
        <View style={styles.ThirdContainer}>
          <Text style={styles.VechileOwnedText}>Driver:</Text>
          <View style={styles.VichelOwnedParentContainer}>
            <View style={styles.VichleContainer}>
              <Text style={styles.VechileOwnedChildText}>Himself</Text>
              <TouchableOpacity>
                <View style={styles.checkboxOuter}>
                  <View style={styles.checkboxInner} />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.VichleContainer}>
              <Text style={styles.VechileOwnedChildText}>Other</Text>
              <TouchableOpacity>
                <View style={styles.checkboxOuter}>
                  <View style={styles.checkboxInner} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Button title="Complete Profile" onPress={ModelHnadler} />
      </View>
    </View>
  );
};

export default CompleteProfile;

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: verticalScale(5),
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
  Headingtext: {
    fontWeight: '600',
    fontSize: scale(24),
    lineHeight: verticalScale(36),
    top: verticalScale(50),
    left: scale(20),
  },
  ParentContainer: {
    width: SCREEN_WIDTH * 0.95,
    height: verticalScale(506),
    top: verticalScale(70),
    left: scale(20),
    right: scale(20),
    gap: scale(24),
    // borderWidth: 2,
  },
  Container: {
    width: SCREEN_WIDTH * 0.95,
    height: verticalScale(160),
    // borderWidth: 2,
    gap: scale(12),
  },
  heading: {
    fontWeight: '500',
    fontSize: scale(24),
    fontFamily: 'Montserrat',
  },
  secondContainer: {
    width: SCREEN_WIDTH * 0.9,
    height: verticalScale(90),
    gap: scale(12),
  },
  labelText: {
    fontWeight: '500',
    fontSize: scale(16),
    lineHeight: verticalScale(24),
    fontFamily: 'Montserrat',
  },
  ThirdContainer: {
    width: SCREEN_WIDTH * 0.95,
    height: verticalScale(92),
    gap: scale(12),
    // borderWidth: 2,
  },
  VichelOwnedParentContainer: {
    // borderWidth: 1,
    gap: scale(16),
  },
  VechileOwnedText: {
    fontWeight: '500',
    fontSize: scale(16),
    lineHeight: verticalScale(24),
    fontFamily: 'Montserrat',
  },
  VechileOwnedChildText: {
    fontWeight: 300,
    fontSize: scale(14),
    lineHeight: verticalScale(20),
  },
  VichleContainer: {
    width: SCREEN_WIDTH * 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  // radio butn css
  checkboxContainer: {
    width: scale(14),
    height: verticalScale(14),
    borderWidth: 1,
    borderRadius: 10,
  },

  checkboxOuter: {
    height: scale(14),
    width: scale(14),
    borderWidth: 1,
    borderColor: '#FF5E5E',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(6),
  },
  checkboxInner: {
    height: scale(9.33),
    width: scale(9.33),
    backgroundColor: '#FF5E5E',
    borderRadius: scale(5),
  },
  btnContainer: {
    width: SCREEN_WIDTH * 0.9,
    left: scale(20),
    top: verticalScale(75),
  },
});
