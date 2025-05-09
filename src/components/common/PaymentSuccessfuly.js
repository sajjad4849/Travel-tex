import {StyleSheet, Text, View} from 'react-native';
import React, {version} from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const PaymentSuccessfuly = ({text, price}) => {
  return (
    <View>
      <View style={styles.PaymentSuccessfulyContainer}>
        <View style={styles.ChildContainer}>
          <Text style={styles.text}>{text}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
    </View>
  );
};

export default PaymentSuccessfuly;

const styles = StyleSheet.create({
  PaymentSuccessfulyContainer: {
    elevation: 5,
    borderRadius: 8,
    borderWidth: 0.2,
    backgroundColor: 'white',
    height: verticalScale(100),
  },
  ChildContainer: {
    alignItems: 'center',
    paddingTop: 30,
    gap: moderateScale(8),
  },
  price: {
    fontWeight: 'bold',
    fontSize: scale(16),
    fontFamily: 'Montserrat',
  },
  text: {
    fontSize: scale(16),
    fontFamily: 'Montserrat',
    fontWeight: '500',
  },
});
