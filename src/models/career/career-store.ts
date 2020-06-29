import { flow, types } from 'mobx-state-tree';
import { CareerModel } from './career';
import { withEnvironment } from '../extensions';

export const CareerStoreModel = types
  .model()
  .props({
    careers: types.optional(types.array(CareerModel), []),
    fetching: types.optional(types.boolean, false),
    error: types.optional(types.boolean, false),
  })
  .extend(withEnvironment)
  .actions((self) => ({
    getAll: flow(function* getAll() {
      try {
        const response = yield self.env.api.getCareers();
        self.careers = response.results;
      } catch (error) {
        self.error = true;
      } finally {
        self.fetching = false;
      }
    }),
  }));

type CareerStoreType = typeof CareerStoreModel.Type;
export type CareerStore = CareerStoreType;
