import { AnimalType } from './animals';

type ValidSounds = 'bark' | 'roar' | 'gulp' | 'meow' | 'buzz';

export type AnimalSoundsType = AnimalType & {
  sound: ValidSounds;
};

export interface IAnimalSounds extends AnimalType {
  sound: ValidSounds;
}

// Define a local animal for testing
const testAnimal: AnimalType = {
  // LESSON - Change this to AnimalSoundsType & see what happens
  name: 'Test Animal',
  type: 'horse'
};

testAnimal.legCount = 4;

// LESSON - partials & picks.  Uncomment below to see intellisense complaints/options
/*
const animalSoundsObjectFromType: Partial<AnimalSoundsType> = {
  name: 'Not a real animal, I just have a name...'
}

const animalSoundsObjectFromInterface: Partial<IAnimalSounds> = {
  name: 'Not a real animal, I just have a name...',
}

const animalSoundsPickerFromType: Pick<AnimalSoundsType, 'sound'> = {
  sound: 'gulp'
}

const animalSoundsPickerFromInterface: Pick<IAnimalSounds, 'sound'> = {
  sound: 'roar'
}
*/

// Dropping this link here for A way types & interfaces differ https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
