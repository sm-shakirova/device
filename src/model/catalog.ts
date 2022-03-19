import { createStore, createEvent } from 'effector';
import { devices, IDevice } from '../data/devices';

export const sortByLowerPrice = createEvent();
export const sortByHigherPrice = createEvent();
export const sortByNovelty = createEvent();

export const $catalog = createStore<IDevice[]>(devices)
  .on(sortByLowerPrice, (products) => [...products].sort((a, b) => a.price - b.price))
  .on(sortByHigherPrice, (products) => [...products].sort((a, b) => b.price - a.price))
  .on(sortByNovelty, (products) => [...products].sort((a, b) => a.isNew ? 0 : b.isNew ? 1 : -1));
