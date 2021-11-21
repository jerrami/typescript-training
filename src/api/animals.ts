const animals = [
  'dog',
  'cat',
  'snake',
  'bear',
  'lion',
  'cetacean',
  'horse',
  'bird',
  'cow',
  'fish',
  'crocodile',
  'insect',
  'rabbit'
] as const; // Determined from Object.keys(animal) at time of writing
export type SupportedType = 'dog' | 'cat' | 'bear' | 'insect' | 'lion' | 'fish'; // Another way to do the above ...

export type AnimalType = {
  name: string;
  type: typeof animals[number];
  legCount?: number; // LESSON - optional properties
};

export class AnimalClass implements AnimalType {
  name: string;
  readonly type: SupportedType; // LESSON Since this is a subset of the 'animals' array, intellisense will infer this subset appropriatel.  See what happens if you add an entry to SupportedType that isn't in animals
  // setCoolness: Function;
  // Notice no required legCount ... yet
}

// LESSON - build an animal here & see what happens when you change AnimalClass type & try & change values
const localAnimalFromClass: AnimalClass = {
  name: 'Always a Lion',
  type: 'lion'
};

localAnimalFromClass.name = 'Not always a lion any more ...';
// localAnimalFromClass.type = 'insect';
// localAnimalFromClass.legCount = 4;

const localAnimalFromType: AnimalType = {
  name: 'From a Type',
  type: 'fish',
  legCount: 0
};

localAnimalFromType.name = 'insect';
localAnimalFromType.type = 'insect';
localAnimalFromType.legCount = 8;
