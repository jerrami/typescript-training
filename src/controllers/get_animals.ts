import { animal } from 'faker';
import { AnimalType } from '../api/animals';
import { Dog } from '../api/dog';
import { Fish } from '../api/fish';
import { isDog, isFish } from '../api/predicates_and_generics';

const addDefaultAction = (input: AnimalType): void => {
  if (isDog(input as Dog | Fish)) {
    (input as Dog).pant = 'pant pant pant' as string; // LESSON - what happens if you remove as string?
  }
  if (isFish(input as Dog | Fish)) {
    (input as Fish).swim = 'just keep swimming' as string;
  }
};

const generateAnimals = (numberOfEach: number) => {
  const results: Array<AnimalType | Fish | Dog> = [];
  for (let i = 0; i < numberOfEach; i++) {
    const bear: AnimalType = {
      name: animal.bear(),
      type: 'bear',
      legCount: 4
    };
    // LESSON - how to handle potential undefined
    if (bear.legCount! > 3) {
      console.log("That's right, bears have more than 3 legs ... duh.");
    }
    const dog: AnimalType = {
      name: animal.dog(),
      type: 'dog',
      legCount: 4
    };
    const fish: AnimalType = {
      name: animal.fish(),
      type: 'fish'
    };
    addDefaultAction(bear);
    addDefaultAction(dog);
    addDefaultAction(fish);
    results.push(bear, dog, fish);
  }
  return results;
};

export const getSampleAnimals = () => {
  return generateAnimals(3);
};
