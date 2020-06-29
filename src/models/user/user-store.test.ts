import faker from 'faker';

import { UserStoreModel, UserStore } from './user-store';

describe('UserStoreModel', () => {
  test('should create a user store', () => {
    const store: UserStore = UserStoreModel.create({});
    expect(store).toBeTruthy();
  });

  test('should login a user', async () => {
    const store: UserStore = UserStoreModel.create({});

    const username = faker.internet.userName();

    store.login(username);
    expect(store.username).toEqual(username);
  });

  test('should logout a user', async () => {
    const store: UserStore = UserStoreModel.create({});

    const username = faker.internet.userName();

    store.login(username);
    expect(store.username).toStrictEqual(username);

    store.logout();
    expect(store.username).toBeNull();
  });
});
