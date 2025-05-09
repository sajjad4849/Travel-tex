import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {version} from 'react';
import {verticalScale} from 'react-native-size-matters';

const DescriptionText = ({multiline, placeholdar, numberOfLines, style}) => {
  return (
    <View>
      <TextInput
        style={[styles.textarea, style]}
        multiline={multiline}
        numberOfLines={numberOfLines}
        placeholder={placeholdar}
      />
    </View>
  );
};

export default DescriptionText;

const styles = StyleSheet.create({
  DescriptionText: {
    borderWidth: 1,
  },
  textarea: {
    height: verticalScale(100),
    textAlignVertical: 'top',
    backgroundColor: '#E8E8E8',
    borderStyle: 'dashed',
  },
});
