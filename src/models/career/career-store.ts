import {
  flow, types, getRoot, destroy,
} from 'mobx-state-tree';
import { CareerModel } from './career';
import { withEnvironment } from '../extensions';

export const CareerStoreModel = types
  .model()
  .props({
    careers: types.optional(types.array(CareerModel), []),
    fetching: types.optional(types.boolean, false),
    submitting: types.optional(types.boolean, false),
    error: types.optional(types.boolean, false),
  })
  .extend(withEnvironment)
  .actions((self) => ({
    getAll: flow(function* getAll() {
      self.fetching = true;
      self.error = false;
      try {
        const response = yield self.env.api.getCareers();
        self.careers = response.results;
      } catch (error) {
        self.error = true;
      } finally {
        self.fetching = false;
      }
    }),
  }))
  .actions((self) => ({
    create: flow(function* create({ title, content }) {
      self.submitting = true;
      self.error = false;
      try {
        const { userStore } = getRoot(self);
        const { username } = userStore;

        yield self.env.api.createCareer({ title, content, username });
        yield self.getAll();
      } catch (error) {
        self.error = true;
      } finally {
        self.submitting = false;
      }
    }),
    update: flow(function* update(id, { title, content }) {
      self.submitting = true;
      self.error = false;
      try {
        const { userStore } = getRoot(self);
        const { username } = userStore;

        yield self.env.api.updateCareer(id, { title, content, username });
        yield self.getAll();
      } catch (error) {
        self.error = true;
      } finally {
        self.submitting = false;
      }
    }),
    remove: flow(function* remove(item) {
      self.submitting = true;
      self.error = false;
      try {
        yield self.env.api.deleteCareer(item.id);
        destroy(item);
        yield self.getAll();
      } catch (error) {
        self.error = true;
      } finally {
        self.submitting = false;
      }
    }),
  }));

type CareerStoreType = typeof CareerStoreModel.Type;
export type CareerStore = CareerStoreType;
