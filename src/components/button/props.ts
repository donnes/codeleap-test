import { TouchableOpacityProperties, ViewStyle } from 'react-native';

export interface ButtonProps extends TouchableOpacityProperties {
  style?: ViewStyle,
  text: string,
}
