import { types } from 'mobx-state-tree';

/**
 * The RootStore model.
 */
export const RootStoreModel = types.model('RootStore').props({});

/**
 * The RootStore instance.
 */
export type RootStore = typeof RootStoreModel.Type;

/**
 * The data of the RootStore.
 */
export type RootStoreSnapshot = typeof RootStoreModel.SnapshotType;
