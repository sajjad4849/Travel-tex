import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {scale, verticalScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';

const ActionMenuModal = ({isVisible, onClose}) => {
  const navigation = useNavigation();
  const HandleNavigation = () => {
    navigation.navigate('EditScreen');
  };
  return (
    <Modal
      visible={isVisible}
      onRequestClose={onClose}
      transparent={true}
      animationType="fade">
      <TouchableOpacity style={styles.modalOverlay} onPress={onClose}>
        <TouchableOpacity style={styles.modalContent} activeOpacity={1}>
          <View style={{gap: 8}}>
            <View style={styles.Firstbox}>
              <View style={styles.childbox}>
                <View>
                  <TouchableOpacity onPress={HandleNavigation}>
                    <Image
                      source={require('../../assets/imges/edit.png')}
                      style={styles.editIcon}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={styles.modalText}>Edit</Text>
                </View>
              </View>
            </View>
            <View style={styles.BottomLine} />
            <View style={styles.Firstbox}>
              <View style={styles.childbox}>
                <View>
                  <Image
                    source={require('../../assets/imges/pdfTabimg.png')}
                    style={styles.editIcon}
                  />
                </View>
                <View>
                  <Text style={styles.modalText}>Generate report</Text>
                </View>
              </View>
            </View>
            <View style={styles.BottomLine} />
            <View style={styles.Firstbox}>
              <View style={styles.childbox}>
                <View>
                  <Image
                    source={require('../../assets/imges/deleteIcon.png')}
                    style={styles.editIcon}
                  />
                </View>
                <View>
                  <Text style={styles.modalTextDel}>Delete</Text>
                </View>
              </View>
            </View>
          </View>

          {/*   */}
          {/* <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity> */}
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

export default ActionMenuModal;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    paddingTop: 200,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: scale(200),
    height: verticalScale(200),
    backgroundColor: 'white',
    borderRadius: 10,
    paddingLeft: 13,
    paddingRight: 13,
    paddingTop: 18,
    paddingBottom: 18,
  },
  Firstbox: {
    flexDirection: 'row',
    // borderWidth: 1,
    height: verticalScale(40),
  },
  BottomLine: {
    borderWidth: 1,
    marginTop: verticalScale(5),
    borderBottomColor: '#F8F8F8',
  },
  childbox: {
    flexDirection: 'row',
    alignItems: 'center',
    left: scale(10),
    gap: scale(12),
  },
  modalText: {
    fontSize: scale(16),
    fontWeight: '500',
    // marginBottom: 20,
    // height: verticalScale(40),
    fontFamily: 'Montserrat',
  },
  modalTextDel: {
    fontSize: scale(16),
    fontWeight: '500',
    color: 'red',
    fontFamily: 'Montserrat',
  },
  closeButton: {
    backgroundColor: '#200233',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
  },
  editIcon: {
    width: scale(20),
    height: verticalScale(20),
    resizeMode: 'contain',
  },
});
