import { ViewProperties, ViewStyle, RefreshControlProps } from 'react-native';

export interface ScreenProps extends ViewProperties {
  children?: React.ReactNode,
  style?: ViewStyle,
  refreshControl?: React.ReactElement<RefreshControlProps, string>,
}
