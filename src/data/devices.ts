export interface IDevice {
  id: number;
  image: string;
  title: string;
  price: number;
  category: string;
  moto?: string;
  description?: string;
  isNew?: boolean;
  bluetooth?: boolean;
  colors?: string[];
  qualities?: {
    quality: string;
    value: string;
  }[]
}

export const devices: IDevice[] = [
  {
    id: 4,
    category: 'monopod',
    image: 'images/catalog/device-1.jpg',
    title: 'Любительская селфи-палка',
    price: 500,
    isNew: false,
    bluetooth: false,
    colors: [
      'black',
      'white'
    ]
  },
  {
    id: 5,
    category: 'monopod',
    image: 'images/catalog/device-2.jpg',
    title: 'Профессиональная селфи-палка ',
    price: 1500,
    isNew: false,
    bluetooth: false,
    colors: [
      'black',
      'blue'
    ]
  },
  {
    id: 6,
    category: 'monopod',
    image: 'images/catalog/device-3.jpg',
    title: 'Непотопляемая селфи-палка',
    price: 2500,
    isNew: false,
    bluetooth: true,
    colors: [
      'black'
    ]
  },
  {
    id: 7,
    category: 'monopod',
    image: 'images/catalog/device-4.jpg',
    title: 'Селфи-палка «Следуй за мной»',
    price: 4900,
    isNew: true,
    bluetooth: true,
    colors: [
      'white',
      'pink'
    ]
  },
];
