import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
  s,
} from 'react-native-size-matters';
import {Link, useNavigation} from '@react-navigation/native';
import Button from '../../common/Button';
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const SubScription = () => {
  const navigation = useNavigation();
  const NavigationHandler = () => {
    console.log('click...........................');
    navigation.navigate('Home');
  };
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={styles.SubScriptioContainer}>
        <Text style={styles.SubScriptionText}>Subscription</Text>
      </View>
      <View style={styles.Paragraph}>
        <Text style={styles.ParagraphText}>
          Subscribe now for unlimited access to premium Premium & Exclusive
          features.
        </Text>
      </View>
      <View style={styles.SubScriptionCard}>
        <View style={styles.InnerCard}>
          <View style={styles.OverlapCard}>
            <View style={styles.OverlapedHeader}>
              <View style={styles.HeaderTextContainer}>
                <Text style={styles.HeaderText}>Free Plan</Text>
              </View>
              <View style={styles.priceContainer}>
                <Text style={styles.priceText}>$0.00</Text>
              </View>
              <View style={styles.detailTextContainer}>
                <View style={styles.lineParent}>
                  <Image
                    source={require('../../../assets/imges/tickmark.png')}
                    style={styles.imgStyle}
                  />
                  <Text style={styles.detaidText}>
                    Lorem ipsum dolor sit amet with no.
                  </Text>
                </View>
                <View style={styles.lineParent}>
                  <Image
                    source={require('../../../assets/imges/tickmark.png')}
                    style={styles.imgStyle}
                  />
                  <Text style={styles.detaidText}>
                    Lorem ipsum dolor sit amet with no.
                  </Text>
                </View>
                <View style={styles.lineParent}>
                  <Image
                    source={require('../../../assets/imges/tickmark.png')}
                    style={styles.imgStyle}
                  />
                  <Text style={styles.detaidText}>
                    Lorem ipsum dolor sit amet with no.
                  </Text>
                </View>
                <View style={styles.lineParent}>
                  <Image
                    source={require('../../../assets/imges/tickmark.png')}
                    style={styles.imgStyle}
                  />
                  <Text style={styles.detaidText}>
                    Lorem ipsum dolor sit amet with no.
                  </Text>
                </View>
                <View style={styles.lineParent}>
                  <Image
                    source={require('../../../assets/imges/tickmark.png')}
                    style={styles.imgStyle}
                  />
                  <Text style={styles.detaidText}>
                    Lorem ipsum dolor sit amet with no.
                  </Text>
                </View>
                <View style={styles.lineParent}>
                  <Image
                    source={require('../../../assets/imges/tickmark.png')}
                    style={styles.imgStyle}
                  />
                  <Text style={styles.detaidText}>
                    Lorem ipsum dolor sit amet with no.
                  </Text>
                </View>
                <View>
                  <TouchableOpacity style={styles.cardInnerbtn}>
                    <Text style={styles.btnText}>Continue for free</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Button title="Complete Profile" onPress={NavigationHandler} />
      </View>
    </View>
  );
};

export default SubScription;

const styles = StyleSheet.create({
  SubScriptioContainer: {
    width: SCREEN_WIDTH * 0.9,
    height: verticalScale(24),
    top: verticalScale(60),
    // borderWidth: 2,
    left: scale(20),
  },
  SubScriptionText: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: scale(18),
    lineHeight: verticalScale(18),
  },
  Paragraph: {
    width: SCREEN_WIDTH * 0.9,
    height: verticalScale(48),
    // borderWidth: 2,
    left: scale(20),
    top: verticalScale(70),
  },
  ParagraphText: {
    fontFamily: 'Montserrat',
    fontWeight: '400',
    fontSize: scale(16),
    lineHeight: verticalScale(24),
    color: '#858585',
  },
  SubScriptionCard: {
    width: SCREEN_WIDTH * 0.9,
    height: verticalScale(350),
    // borderWidth: 2,
    left: scale(20),
    top: verticalScale(140),
  },
  InnerCard: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: '#200233',
    width: SCREEN_WIDTH * 0.9,
    height: verticalScale(80),
  },
  OverlapCard: {
    width: scale(285),
    height: verticalScale(375),
    // borderWidth: 2,
    left: scale(14),
    top: verticalScale(-35),
    // zIndex: 400,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  OverlapedHeader: {
    width: scale(285),
    height: verticalScale(90),
    backgroundColor: '#FF5E5E',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  HeaderText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: scale(35),
    lineHeight: verticalScale(20),
    color: 'white',
  },
  HeaderTextContainer: {
    width: scale(150),
    // borderWidth: 1,
    height: verticalScale(40),
    left: scale(78),
    top: verticalScale(11),
    justifyContent: 'center',
  },
  priceContainer: {
    width: scale(67),
    height: verticalScale(30),
    top: verticalScale(8),
    justifyContent: 'center',
    alignSelf: 'center',
    left: scale(12),
  },
  priceText: {
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: scale(24),
    color: 'white',
  },
  detailTextContainer: {
    width: scale(260),
    top: verticalScale(40),
    height: verticalScale(200),
    left: scale(15),
    // borderWidth: 2,
    gap: moderateScale(15),
  },
  imgStyle: {
    width: scale(12),
    height: verticalScale(9),
    left: scale(5),
  },
  detaidText: {
    fontFamily: 'Montserrat',
    fontFamily: '400',
    fontSize: scale(14),
    lineHeight: verticalScale(22),
    color: '#858585',
  },
  lineParent: {
    flexDirection: 'row',
    height: verticalScale(22),
    width: scale(260),
    alignItems: 'center',
    gap: 15,
    // borderWidth: 2,
  },
  btnContainer: {
    width: SCREEN_WIDTH * 0.95,
    left: scale(9),
    top: verticalScale(180),
  },
  cardInnerbtn: {
    borderWidth: 1,
    borderRadius: 50,
    height: verticalScale(50),
    borderColor: '#FF5E5E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#200233',
    fontWeight: '600',
    fontSize: scale(16),
    lineHeight: 26,
  },
});
