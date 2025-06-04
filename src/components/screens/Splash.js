import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('LanguageScreen');
    }, 2000);
  });
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={require('../../../src/assets/imges/logo.png')}
        style={styles.imageStyle}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  imageStyle: {
    width: SCREEN_WIDTH * 0.6,
    height: SCREEN_HEIGHT * 0.3,
  },
});
