export interface ISlide {
  id: number;
  title: string;
  text: string;
  image: string;
}

export const slides: ISlide[] = [
  {
    id: 1,
    title: 'Порхает как бабочка, жалит как пчела!',
    text: 'Этот обычный, на первый взгляд, квадрокоптер оснащён мощным лазером, замаскированным под стандартную камеру.',
    image: 'images/slider/quadcopter.png',
  },
  {
    id: 2,
    title: 'Худеем правильно!',
    text: 'Мотивирующие фитнес-браслеты помогут найти в себе силы не пропускать занятия и соблюдать диету.',
    image: 'images/slider/bracelet.png',
  },
  {
    id: 3,
    title: 'Делай селфи, как Бен Стиллер!',
    text: 'Самая длинная палка для селфи доступна в нашем магазине. Восемь (Восемь, Карл!) метров длиной и весом всего 5 кг.',
    image: 'images/slider/monopod.png',
  },
];
