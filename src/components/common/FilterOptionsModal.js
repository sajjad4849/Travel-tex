import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {version} from 'react';
import {scale, verticalScale} from 'react-native-size-matters';

const FilterOptionsModal = ({isVisible, onClose}) => {
  return (
    <Modal
      visible={isVisible}
      onRequestClose={onClose}
      transparent={true}
      animationType="fade">
      <TouchableOpacity style={styles.ModelOverlay} onPress={onClose}>
        <View style={styles.modalContent}>
          <View style={styles.listContainer}>
            <View style={styles.TextContainer}>
              <Text>Weekly</Text>
            </View>
            <TouchableOpacity style={styles.OuterRadio}>
              <Text style={styles.InnerRadio}></Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomLine} />
          <View style={styles.listContainer}>
            <View style={styles.TextContainer}>
              <Text>Monthly</Text>
            </View>
            <TouchableOpacity style={styles.OuterRadio}>
              <Text style={styles.InnerRadio}></Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomLine} />
          <View style={styles.listContainer}>
            <View style={styles.TextContainer}>
              <Text>3Months</Text>
            </View>
            <TouchableOpacity style={styles.OuterRadio}>
              <Text style={styles.InnerRadio}></Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomLine} />
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default FilterOptionsModal;

const styles = StyleSheet.create({
  ModelOverlay: {
    flex: 1,
    paddingTop: 90,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: scale(250),
    height: verticalScale(150),
    backgroundColor: 'white',
    right: 30,
    borderRadius: 10,
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    alignItems: 'center',
    marginTop: 15,
  },
  OuterRadio: {
    width: scale(14),
    height: verticalScale(14),
    borderRadius: scale(14) / 1,
    borderWidth: 1,
    borderColor: '#FF5E5E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  InnerRadio: {
    width: scale(9.33),
    height: verticalScale(9.33),
    borderRadius: scale(9.33) / 2,
    backgroundColor: '#FF5E5E',
  },
  bottomLine: {
    borderWidth: 0.3,
    marginHorizontal: 15,
    marginTop: 13,
    borderColor: 'rgb(230, 222, 222)',
  },
  TextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
