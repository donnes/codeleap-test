import faker from 'faker';

import { CareerSnapshot } from './career';
import { CareerStoreModel, CareerStore } from './career-store';

jest.mock('../../services');
jest.mock('axios');
jest.setTimeout(20000);

describe('CareerStoreModel', () => {
  test('can create the career store', () => {
    const store: CareerStore = CareerStoreModel.create({});
    expect(store).toBeTruthy();
    expect(store.careers).toStrictEqual([]);
    expect(store.fetching).toBeFalsy();
    expect(store.error).toBeFalsy();
  });

  test('can get a list of careers', async () => {
    const mockCareers: CareerSnapshot[] = [
      {
        id: faker.random.number(),
        username: faker.internet.userName(),
        created_datetime: faker.date.recent().toISOString(),
        title: faker.name.title(),
        content: faker.lorem.paragraph(),
      },
    ];

    const store: CareerStore = CareerStoreModel.create({}, {
      api: {
        async getCareers() {
          return Promise.resolve({ results: mockCareers });
        },
      },
    });

    await store.getAll();
    expect(store.careers).toStrictEqual(mockCareers);
  });
});
