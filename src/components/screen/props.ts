import { ViewProperties, ViewStyle } from 'react-native';

export interface ScreenProps extends ViewProperties {
  children?: React.ReactNode,
  style?: ViewStyle,
}
