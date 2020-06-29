import { ViewProperties } from 'react-native';

export interface CareerFormProps extends ViewProperties {
  title?: string,
  onSave(): void,
}
