import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {version} from 'react';
import {Dimensions} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import InputFild from '../../common/InputFild';
import DescriptionText from '../../common/DescriptionText';
import PaymentSuccessfuly from '../../common/PaymentSuccessfuly';
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const EditScreen = () => {
  const navigation = useNavigation();
  const HandlebackNavigator = () => {
    console.log('function is called');
    navigation.goBack();
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.headingContainer}>
        <View style={styles.HeaderLeftContainer}>
          <View>
            <TouchableOpacity onPress={HandlebackNavigator}>
              <Image
                source={require('../../../assets/imges/Back.png')}
                style={styles.ImageStyle}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.EditText}>Edit Expense</Text>
          </View>
        </View>

        <View>
          <Text style={styles.saveText}>Save</Text>
        </View>
      </View>
      <View style={styles.SecondContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.LabelText}>Expense Category</Text>
          <InputFild
            placeholdar="Gas"
            img={require('../../../assets/imges/Menue-icon.png')}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.LabelText}>Expense Amount</Text>
          <InputFild placeholdar="$1500" />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.LabelText}>Expense Date</Text>
          <InputFild
            placeholdar="14/01/2000"
            img={require('../../../assets/imges/clindarRed.png')}
          />
        </View>
        <View style={styles.descriptionGroup}>
          <Text style={styles.LabelText}>Expense Date</Text>
          <DescriptionText
            placeholdar="Write message here...."
            multiline={true}
            numberOfLines={12}
            style={styles.Textarea}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.LabelText}>Tracked Mileage</Text>
          <InputFild placeholdar="14 km" />
        </View>
        <View>
          <PaymentSuccessfuly
            img={require('../../../assets/imges/paymentSucces.png')}
            text="Payment Success!"
            price="IDR 1,000,000"
          />
        </View>
      </View>
    </View>
  );
};

export default EditScreen;

const styles = StyleSheet.create({
  headingContainer: {
    width: SCREEN_WIDTH * 0.9,
    left: scale(20),
    top: verticalScale(20),
    position: 'absolute',
    // borderWidth: 1,
    height: verticalScale(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  HeaderLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(12),
  },
  ImageStyle: {
    width: scale(20),
    height: verticalScale(20),
  },
  EditText: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: scale(15),
  },
  saveText: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: scale(14),
    color: '#FF5E5E',
  },
  // Second Container start from here
  SecondContainer: {
    width: SCREEN_WIDTH * 0.92,
    position: 'absolute',
    top: verticalScale(60),
    // borderWidth: 1,
    left: scale(15),
    gap: moderateScale(15),
  },
  inputGroup: {
    // borderWidth: 1,
    // borderColor: 'red',
    gap: 10,
  },
  LabelText: {
    fontWeight: '500',
    fontSize: scale(16),
    fontFamily: 'Montserrat',
  },
  descriptionGroup: {
    gap: 10,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  Textarea: {
    borderWidth: 1,
    borderRadius: 8,
  },
});
