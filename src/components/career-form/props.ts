import { ViewProperties } from 'react-native';

export interface CareerFormProps extends ViewProperties {
  title?: string,
  onSave(title: string | undefined, content: string | undefined): void,
  initialValues?: {
    title: string | undefined,
    content: string | undefined,
  },
  submitting?: boolean,
  cancelable?: boolean,
}
