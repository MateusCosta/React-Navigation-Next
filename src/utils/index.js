import {Dimensions, PixelRatio} from 'react-native';
const widthPercentageToDP = widthPercent => {
  const screenWidth = Dimensions.get('window').width;
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
};

const heightPercentageToDP = heightPercent => {
  const screenHeight = Dimensions.get('window').height;
  const elemHeight = parseFloat(heightPercent);
return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
};

const WHeight = (parseFloat(Dimensions.get('window').height));
const WWidth = (parseFloat(Dimensions.get('window').width));

export {
  widthPercentageToDP,
  heightPercentageToDP,
  WHeight,
  WWidth
};