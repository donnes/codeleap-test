import { types } from 'mobx-state-tree';

export const UserStoreModel = types
  .model()
  .props({
    username: types.maybeNull(types.string),
  })
  .actions((self) => ({
    login(username: string) {
      self.username = username;
    },
    logout() {
      self.username = null;
    },
  }));

type UserStoreType = typeof UserStoreModel.Type;
export type UserStore = UserStoreType;
