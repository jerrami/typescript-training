import { Dog } from './dog';
import { Fish } from './fish';

// LESSON - predicates & type determination from unions
export const isFish = (pet: Fish | Dog): pet is Fish => {
  return (pet as Fish).swim !== undefined || pet.type === 'fish';
};

export const isDog = (pet: Fish | Dog): pet is Dog => {
  return (pet as Dog).pant !== undefined || pet.type === 'dog';
};

// Why have this?
type FishOrDog = {
  name: string;
  type: 'fish' | 'dog';
  extends: Fish | Dog; // When using a Union Type - need a way of determining the appropriate type
  tailWag: Function;
};
const localFishOrDog: FishOrDog = {
  name: 'fish or dog',
  type: 'fish',
  extends: {
    name: 'fish extension',
    type: 'fish',
    swim: () => console.log('just keep swimming')
  },
  tailWag: () => true
};
localFishOrDog.tailWag();

const localFish: Fish = {
  name: 'Guppy',
  type: 'fish',
  swim: () => {
    console.log('just keep swimming');
  }
};

// LESSON - Would NOT do this, but shows how you can have generic functions that overwrite and/or let you specify return type
export const typeStomping = <T>(input: unknown): T => {
  return input as T;
};

const canPantNow = typeStomping<Dog>(localFish);
try {
  if (typeof canPantNow.pant === 'function') {
    canPantNow.pant();
  }
} catch (e) {
  // Do nothing, this would err on runtime because pant is still undefined but typescript thinks it's OK
}
