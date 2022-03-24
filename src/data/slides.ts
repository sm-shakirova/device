import  { IDevice } from './devices';

export const slides: IDevice[] = [
  {
    id: 1,
    image: 'images/slider/quadcopter.png',
    title: 'Квадрокоптер с лазером',
    moto: 'Порхает как бабочка, жалит как пчела!',
    description: 'Этот обычный, на первый взгляд, квадрокоптер оснащён мощным лазером, замаскированным под стандартную камеру.',
    price: 5000,
    isNew: true,
    bluetooth: true,
    colors: ['black', 'white']
  },
  {
    id: 2,
    image: 'images/slider/bracelet.png',
    title: 'Фитнес-браслет',
    moto: 'Худеем правильно!',
    description: 'Мотивирующие фитнес-браслеты помогут найти в себе силы не пропускать занятия и соблюдать диету.',
    price: 4000,
    isNew: true,
    bluetooth: false,
    colors: ['black']
  },
  {
    id: 3,
    image: 'images/slider/monopod.png',
    title: 'Восьмиметровая селфи-палка',
    moto: 'Делай селфи, как Бен Стиллер!',
    description: 'Самая длинная палка для селфи доступна в нашем магазине. Восемь (Восемь, Карл!) метров длиной и весом всего 5 кг.',
    price: 4500,
    isNew: false,
    bluetooth: false,
    colors: ['black']
  },
];
