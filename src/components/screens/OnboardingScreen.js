import {StyleSheet, Image, Text, View} from 'react-native';
import React, {useState} from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import Button from '../common/Button';
import {useNavigation} from '@react-navigation/native';
import {scale, verticalScale} from 'react-native-size-matters';
import SkipNextbtn from '../common/SkipNextbtn';

const OnboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();
  const NavigationHandler = () => {
    navigation.navigate('SelectAccount');
  };
  return (
    <Onboarding
      pages={[
        {
          image: <Image source={require('../../assets/imges/bro.png')} />,
          title: <Text style={styles.titleStyle}>Welcome to Travel Tax</Text>,
          subtitle: (
            <Text style={styles.subtitleStyle}>
              Take Control of Your Finances! Log, track, and manage your
              expenses with ease. Transform the way you handle your finances
              today!
            </Text>
          ),
        },
        {
          image: (
            <Image source={require('../../assets/imges/illustration.png')} />
          ),
          title: (
            <Text style={styles.titleStyle}>Effortless Expense Logging</Text>
          ),
          subtitle: (
            <Text style={styles.subtitleStyle}>
              Quick and Simple Expense Entry. Add expenses in seconds upload
              receipts, scan QR codes, and categorize your spending
              effortlessly!
            </Text>
          ),
        },
        {
          image: <Image source={require('../../assets/imges/bro2.png')} />,
          title: (
            <Text style={styles.titleStyle}>Real Time Mileage Tracking</Text>
          ),
          subtitle: (
            <Text style={styles.subtitleStyle}>
              Maximize Your Deductions. Use GPS to effortlessly track your
              mileage for accurate records and tax deductions.
            </Text>
          ),
        },
        {
          image: <Image source={require('../../assets/imges/bro3.png')} />,
          title: <Text style={styles.titleStyle}>Ready to Get Started?,</Text>,
          subtitle: (
            <View style={styles.lastScreen}>
              <Text style={styles.subtitleText}>
                Insights at Your Fingertips. Generate comprehensive reports to
                gain insights into your spending habits and make informed
                financial decisions.
              </Text>
              <Button
                title="Get Started"
                onPress={NavigationHandler}
                style={styles.getStartedButton}
              />
            </View>
          ),
        },
      ]}
      onChange={setCurrentIndex}
      showSkip={currentIndex !== 3}
      showNext={currentIndex !== 3}
      showDone={false} // Disable default Done button
      bottomBarHighlight={false}
      showPagination={currentIndex !== 3 ? true : false}
      SkipButtonComponent={props => <SkipNextbtn {...props} label="Skip" />}
      NextButtonComponent={props => <SkipNextbtn {...props} label="Next" />}
    />
  );
};

const styles = StyleSheet.create({
  lastScreen: {
    alignItems: 'center',
    gap: 30,
  },
  subtitleText: {
    color: '#858585',
    fontWeight: 300,
    fontSize: scale(20),
    lineHeight: verticalScale(30),
    textAlign: 'justify',
    marginHorizontal: scale(12),
  },
  getStartedButton: {
    width: '100%',
    marginTop: 20,
  },
  imageContainer: {
    alignItems: 'center',
  },
  onboard: {
    backgroundColor: 'red',
  },
  titleStyle: {
    // color: '#333333',
    fontWeight: 700,
    fontSize: scale(24),
    textAlign: 'center',
  },
  subtitleStyle: {
    color: '#858585',
    fontWeight: 300,
    fontSize: scale(20),
    lineHeight: verticalScale(30),
    textAlign: 'justify',
    marginHorizontal: scale(12),
  },
});

export default OnboardingScreen;
