import { name } from 'faker';

const getJob = () => {
  return name.jobTitle();
};

export function AddJob<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    job = getJob();
  };
}
