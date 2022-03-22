import { createStore, createEvent } from 'effector';
import { devices, IDevice } from '../data/devices';
import { defaultFilters, IDefaultFilters } from '../data/filters';

export const changeFilters = createEvent<IDefaultFilters>();
export const $filters = createStore(defaultFilters)
  .on(changeFilters, (_, payload) => payload);

export const filterProducts = createEvent<IDefaultFilters>();
export const sortByLowerPrice = createEvent();
export const sortByHigherPrice = createEvent();
export const sortByNovelty = createEvent();

export const $catalog = createStore<IDevice[]>(devices)
  .on(filterProducts, (products, currentFilters) => {
    return products.filter((product) => {
      if (product.price < currentFilters.price.min) return false;
      if (product.price > currentFilters.price.max) return false;
      if (product.bluetooth !== currentFilters.bluetooth) return false;
      // будущая проверка списка цветов
      return true;
    })
  })
  .on(sortByLowerPrice, (products) => [...products].sort((a, b) => a.price - b.price))
  .on(sortByHigherPrice, (products) => [...products].sort((a, b) => b.price - a.price))
  .on(sortByNovelty, (products) => [...products].sort((a, b) => a.isNew ? 0 : b.isNew ? 1 : -1));
