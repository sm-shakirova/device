export interface IDevice {
  id: number;
  image: string;
  title: string;
  price: number;
  isNew: boolean;
}

export const devices: IDevice[] = [
  {
    id: 1,
    image: 'images/catalog/device-1.jpg',
    title: 'Любительская селфи-палка',
    price: 500,
    isNew: false,
  },
  {
    id: 2,
    image: 'images/catalog/device-2.jpg',
    title: 'Профессиональная селфи-палка ',
    price: 1500,
    isNew: false,
  },
  {
    id: 3,
    image: 'images/catalog/device-3.jpg',
    title: 'Непотопляемая селфи-палка',
    price: 2500,
    isNew: false,
  },
  {
    id: 4,
    image: 'images/catalog/device-4.jpg',
    title: 'Селфи-палка «Следуй за мной»',
    price: 4900,
    isNew: true,
  },
];
