import { name } from 'faker';
import { AddJob } from '../api/decorators';

@AddJob // LESSON - What happens when we remove this decorator?
class Person {
  name: string;
  constructor() {
    this.name = `${name.firstName()} ${name.lastName()}`;
  }
}

export const createPerson = () => {
  return new Person();
};
