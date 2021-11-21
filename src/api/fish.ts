import { AnimalClass } from './animals';

export type Fish = AnimalClass & {
  swim: Function | string;
};

const localFish: Fish = {
  name: 'Guppy',
  type: 'fish',
  swim: () => {
    console.log('just keep swimming');
  }
};

localFish !== undefined;
