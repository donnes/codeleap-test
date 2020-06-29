import { ViewProperties } from 'react-native';
import { CareerSnapshot } from '../../models/career';

export interface CareerListItemProps extends ViewProperties {
  index?: number,
  career: CareerSnapshot,
}
