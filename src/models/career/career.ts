import { types, flow, getParent } from 'mobx-state-tree';

export const CareerModel = types
  .model()
  .props({
    id: types.maybeNull(types.number),
    username: types.maybeNull(types.string),
    created_datetime: types.maybeNull(types.string),
    title: types.maybeNull(types.string),
    content: types.maybeNull(types.string),
  })
  .actions((self) => ({
    remove: flow(function* remove() {
      yield getParent(self, 2).remove(self);
    }),
  }));

export type Career = typeof CareerModel.Type;
export type CareerSnapshot = typeof CareerModel.SnapshotType;
