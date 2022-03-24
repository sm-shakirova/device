import { createStore } from 'effector';
import { slides, ISlide } from '../data/slides';

export const $slides = createStore<ISlide[]>(slides);
