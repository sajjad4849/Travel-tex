import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const OrangeButton = ({label, ...props}) => {
  console.log('Label recived');
  return (
    <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
      <Text style={{color: '#FF5E5E', fontSize: 16, fontWeight: 400}}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default OrangeButton;
