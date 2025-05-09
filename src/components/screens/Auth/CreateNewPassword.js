import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Dimensions,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import Inputbox from '../../common/Inputbox';
import Button from '../../common/Button';
import {useNavigation} from '@react-navigation/native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const CreateNewPassword = () => {
  const [openModal, setOpenModal] = useState(false);
  const navigation = useNavigation();

  const handleModal = () => {
    console.log('modla open');
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    navigation.navigate('CountrySelectionScreen');
  };

  useEffect(() => {
    console.log('First Modal is:', openModal ? 'Open' : 'Closed');
  }, [openModal]);

  return (
    <View>
      <Modal
        key="firstModal"
        visible={openModal}
        transparent={true}
        animationType="fade"
        onRequestClose={handleCloseModal}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.imgContainer}>
              <Image
                source={require('../../../assets/imges/modal-img.png')}
                style={styles.modalImg}
              />
            </View>
            <View style={styles.modelTextContainer}>
              <Text style={styles.modalText}>
                Your password has been successfully created!
              </Text>
            </View>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={handleCloseModal}>
              <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity>
        <View style={styles.ImageContainer}>
          <Image
            source={require('../../../assets/imges/Back.png')}
            style={styles.img}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.Container}>
        <Text style={styles.Heading}>Create New Password</Text>
      </View>

      <View style={styles.subHeading}>
        <Text style={styles.textStyle}>Create Your New Password here!</Text>
      </View>

      <View style={styles.SecondContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Old Password</Text>
          <Inputbox
            placeholdar="Enter your Password"
            img={require('../../../assets/imges/pass-icon.png')}
            icon={require('../../../assets/imges/pass-icon2.png')}
            style={styles.box}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>New Password</Text>
          <Inputbox
            placeholdar="Enter your Password"
            img={require('../../../assets/imges/pass-icon.png')}
            icon={require('../../../assets/imges/pass-icon2.png')}
            style={styles.box}
          />
        </View>
        <View style={styles.btnContainer}>
          <Button title="Create New Password" onPress={handleModal} />
        </View>
      </View>
    </View>
  );
};

export default CreateNewPassword;

const styles = StyleSheet.create({
  ImageContainer: {
    width: scale(24),
    height: verticalScale(24),
    top: verticalScale(30),
    left: scale(20),
  },
  img: {
    width: scale(22),
    height: verticalScale(16),
  },
  Container: {
    position: 'absolute',
    width: SCREEN_WIDTH * 0.9,
    height: verticalScale(36),
    top: 109,
    left: 20,
    gap: moderateScale(40),
    // borderWidth: 1,
  },
  Heading: {
    fontFamily: 'Montserrat',
    fontWeight: '700',
    fontSize: scale(24),
    lineHeight: verticalScale(36),
  },
  subHeading: {
    height: verticalScale(24),
    position: 'absolute',
    top: verticalScale(161),
    left: scale(20),
  },
  textStyle: {
    fontFamily: 'Montserrat',
    fontWeight: '400',
    fontSize: scale(16),
    lineHeight: verticalScale(24),
    color: '#858585',
  },
  SecondContainer: {
    width: SCREEN_WIDTH * 0.9,
    height: verticalScale(193),
    position: 'absolute',
    top: 225,
    left: 20,
    gap: moderateScale(13),
  },
  inputContainer: {
    height: verticalScale(90),
    gap: moderateScale(12),
  },
  label: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: scale(16),
  },
  btnContainer: {
    width: SCREEN_WIDTH * 0.9,
    height: verticalScale(54),
    position: 'absolute',
    justifyContent: 'center',
    top: 380,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
  modalContent: {
    height: verticalScale(350),
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    top: 40,
    width: '90%',
    zIndex: 1001,
  },
  imgContainer: {
    width: scale(186),
    height: verticalScale(165),
    position: 'absolute',
    top: 50,
  },
  modalImg: {
    width: '100%',
    resizeMode: 'contain',
  },
  modalText: {
    fontFamily: 'Montserrat',
    fontWeight: '600',
    fontSize: scale(24),
    lineHeight: verticalScale(36),
    marginBottom: 20,
    textAlign: 'center',
  },
  closeButton: {
    top: verticalScale(105), // Adjusted to fit within modal
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  modelTextContainer: {
    position: 'absolute',
    top: verticalScale(230),
  },
});
