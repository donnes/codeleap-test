import { PixelRatio, Dimensions } from 'react-native';

const { width: windowWidth } = Dimensions.get('window');

export const normalize = (layoutSize: number) => {
  const scale = windowWidth / 360;
  const newSize = layoutSize * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};
