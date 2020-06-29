import { ViewProperties } from 'react-native';

export interface CareerFormProps extends ViewProperties {
  title?: string,
  onSave(title: string, content: string): void,
  initialValues?: {
    title: string | '',
    content: string | '',
  },
  submitting?: boolean,
}
