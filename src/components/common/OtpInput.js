import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {version} from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const OtpInput = ({placeholder}) => {
  return (
    <View>
      <TextInput
        style={styles.inputBox}
        placeholder={placeholder}
        textAlign="center"
        placeholderTextColor="#333333"
        keyboardType="numric"
      />
    </View>
  );
};

export default OtpInput;

const styles = StyleSheet.create({
  inputBox: {
    width: scale(60),
    height: verticalScale(59),
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: moderateScale(80),
    fontWeight: 700,
    fontSize: scale(26),
  },
});
