import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import PropTypes from 'prop-types';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const ModelComponent = ({
  visible = false,
  transparent = true,
  animationType = 'fade',
  onPress,
  onRequestClose = () => {},
}) => {
  return (
    <Modal
      key="secondModal"
      visible={visible}
      transparent={transparent}
      animationType={animationType}
      onRequestClose={onRequestClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.ModelBox}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/imges/modal-img.png')} // Fixed path
              style={styles.imgStyle}
            />
          </View>

          <Text style={styles.textStyle}>
            You’ve successfully Created your Profile!
          </Text>
          <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text
              style={{
                textAlign: 'center',
                paddingTop: 4,
                color: 'white',
              }}>
              ok
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

ModelComponent.propTypes = {
  visible: PropTypes.bool,
  transparent: PropTypes.bool,
  animationType: PropTypes.oneOf(['none', 'slide', 'fade']),
  onRequestClose: PropTypes.func,
};

export default ModelComponent;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2000,
  },
  ModelBox: {
    width: SCREEN_WIDTH * 0.85,
    height: verticalScale(300),
    borderRadius: scale(8),
    backgroundColor: '#fff',
    overflow: 'hidden',
    alignItems: 'center', // Center content horizontally
    paddingVertical: verticalScale(20),
  },
  imgStyle: {
    width: scale(186),
    height: verticalScale(180),
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    marginTop: verticalScale(10),
    fontWeight: '600',
    fontSize: scale(24),
    fontFamily: 'Montserrat',
    color: '#000',
    textAlign: 'center',
  },
  btn: {
    top: verticalScale(10),
    width: scale(30),
    height: verticalScale(20),
    // borderWidth: 2,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
});
