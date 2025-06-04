import React, {useState, useRef} from 'react';
import {Image, Text, View, FlatList, Dimensions} from 'react-native';
import onBordinStyle from '../Style/onBordinStyle';
import {useNavigation} from '@react-navigation/native';
import {onBoardList} from '../common/OnboarDingData';
import Button from '../common/Button';
const {width} = Dimensions.get('window');
const OnboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();
  const HandleNavigation = () => {
    navigation.navigate('SelectAccount');
  };
  const handleScroll = event => {
    const scrollX = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollX / width);
    setCurrentIndex(index);
  };
  const flatListRef = useRef(null);
  const HandelNext = () => {
    if (currentIndex < onBoardList.length - 1) {
      flatListRef.current.scrollToIndex({index: currentIndex + 1});
    }
  };
  const HandelSkip = () => {
    if (currentIndex > 0) {
      flatListRef.current.scrollToIndex({index: currentIndex - 1});
    }
  };
  return (
    <View style={onBordinStyle.container}>
      <FlatList
        ref={flatListRef}
        data={onBoardList}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={onBordinStyle.slide}>
            <View style={onBordinStyle.imgParent}>
              <Image source={item.img} style={onBordinStyle.img} />
            </View>
            <Text style={onBordinStyle.title}>{item.title}</Text>
            <Text style={onBordinStyle.subTitle}>{item.subTitle}</Text>
          </View>
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
      />
      <View style={onBordinStyle.bottomIndicatorContainer}>
        {currentIndex === 3 ? (
          <Button title="Get Started" onPress={HandleNavigation} />
        ) : (
          <>
            <View>
              <Text style={onBordinStyle.SkipText} onPress={HandelSkip}>
                Skip
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              {onBoardList.map((_, index) => (
                <View
                  key={index}
                  style={[
                    onBordinStyle.dot,
                    currentIndex === index
                      ? onBordinStyle.activeDot
                      : onBordinStyle.inactiveDot,
                  ]}
                />
              ))}
            </View>
            <View>
              <Text style={onBordinStyle.NextText} onPress={HandelNext}>
                Next
              </Text>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default OnboardingScreen;
