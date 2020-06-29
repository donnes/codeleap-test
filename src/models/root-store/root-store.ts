import { types } from 'mobx-state-tree';
import { CareerStoreModel } from '../career';

/**
 * The RootStore model.
 */
export const RootStoreModel = types.model('RootStore').props({
  careerStore: types.optional(CareerStoreModel, {}),
});

/**
 * The RootStore instance.
 */
export type RootStore = typeof RootStoreModel.Type;

/**
 * The data of the RootStore.
 */
export type RootStoreSnapshot = typeof RootStoreModel.SnapshotType;
