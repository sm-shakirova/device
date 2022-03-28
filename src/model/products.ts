import { createStore, createEvent } from 'effector';
import { devices, IDevice } from '../data/devices';
import { filters, defaultFilters, IDefaultFilters } from '../data/filters';
import { categories } from '../data/categories';

export const $categories = createStore(categories);

export const changeFilters = createEvent<IDefaultFilters>();
export const $filters = createStore(defaultFilters)
  .on(changeFilters, (_, payload) => payload);

export const filterByCategory = createEvent<string>();
export const filterProducts = createEvent<IDefaultFilters>();
export const sortByLowerPrice = createEvent();
export const sortByHigherPrice = createEvent();
export const sortByNovelty = createEvent();
export const resetProducts = createEvent();

export const $products = createStore<IDevice[]>(devices)
  .on(filterByCategory, (products, category) =>
    products.filter((product) => product.category === category)
  )
  .on(filterProducts, (products, currentFilters) => {
    return products.filter((product) => {
      // if (product.price < currentFilters.price.min) return false;
      // if (product.price > currentFilters.price.max) return false;
      if (product.bluetooth && currentFilters.bluetooth === 'no') return false;
      if (!product.bluetooth && currentFilters.bluetooth === 'yes') return false;
      let colorCheck;
      if (!currentFilters.colors.length && !product.colors?.length) colorCheck = true;
      else if (currentFilters.colors.length && !product.colors?.length) colorCheck = false;
      else if (!currentFilters.colors.length && product.colors &&  product.colors.length) colorCheck = false;
      else {
        const colors = filters.find((filter) => filter.name === 'color')!.options;
        colors!.forEach((color) => {
          if (currentFilters.colors.includes(color.value) &&
            product.colors && product.colors.includes(color.value)) colorCheck = true;
        })
      }
      return colorCheck;
    })
  })
  .on(sortByLowerPrice, (products) =>
    [...products].sort((a, b) => a.price - b.price))
  .on(sortByHigherPrice, (products) =>
    [...products].sort((a, b) => b.price - a.price))
  .on(sortByNovelty, (products) =>
    [...products].sort((a, b) => a.isNew ? 0 : b.isNew ? 1 : -1))
  .reset(resetProducts);
