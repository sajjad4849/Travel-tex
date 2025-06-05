import {StyleSheet, Dimensions} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
const {height} = Dimensions.get('window');
const {width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: Dimensions.get('window').width,
    alignItems: 'center',
    gap: 40,
  },
  imgParent: {
    width: '100%',
    alignItems: 'center',
  },
  img: {
    width: '90%',
    height: height * (350 / 812),
    resizeMode: 'contain',
  },
  title: {
    fontSize: scale(24),
    fontFamily: 'Urbanist',
    fontWeight: '700',
  },
  subTitle: {
    fontWeight: '300',
    fontSize: scale(19),
    color: 'blue',
    textAlign: 'center',
    marginHorizontal: 5,
    lineHeight: 30,
  },
  SkipText: {
    fontFamily: 'Montserrat',
    fontWeight: 400,
    fontSize: scale(16),
    color: '#666666',
  },
  NextText: {
    fontFamily: 'Montserrat',
    fontWeight: 400,
    fontSize: scale(16),
    color: '#FF5E5E',
  },
  dot: {
    width: scale(8),
    height: verticalScale(8),
    borderRadius: 20,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#FF5E5E',
    width: 50,
  },
  inactiveDot: {
    backgroundColor: '#ccc',
  },
  slide: {
    width: width,
    alignItems: 'center',
    paddingTop: 70,
    gap: 10,
  },
  bottomIndicatorContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
});
