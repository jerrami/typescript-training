import { AnimalClass } from './animals';

export type Dog = AnimalClass & {
  pant: Function | string;
};

const localDog: Dog = {
  name: 'Fido',
  type: 'dog',
  pant: () => {
    console.log('panting ... panting ... panting');
  }
};

localDog !== undefined;
