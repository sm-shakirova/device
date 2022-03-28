export interface ICategory {
  name: string,
  display: string;
}

export const categories: ICategory[] = [
  {
    name: 'vr',
    display: 'Виртуальная реальность'
  },
  {
    name: 'monopod',
    display: 'Моноподы для cелфи'
  },
  {
    name: 'camera',
    display: 'Экшн-камеры'
  },
  {
    name: 'bracelet',
    display: 'Фитнес-браслеты'
  },
  {
    name: 'watch',
    display: 'Умные часы'
  },
  {
    name: 'quadcopter',
    display: 'Квадрокоптеры'
  }
];
