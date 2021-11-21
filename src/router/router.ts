import { Request, Response } from 'express';
import { getSampleAnimals } from '../controllers/get_animals';
import { createPerson } from '../controllers/get_decorators';
import { GetEndpoints } from './get_endpoints';

/**
 * Shows the values of an enum
 * {@link https://www.petermorlion.com/iterating-a-typescript-enum/}
 * @returns a concatinated string with all the enum values
 */
const getSupportedGetEndpoints = () => {
  let result = '';
  for (const val in GetEndpoints) {
    result += `${val}, `;
  }
  // Git rid of last comma for the grammar police ...
  return result.slice(0, result.lastIndexOf(','));
};

/**
 * Main get method handler for the server.  Checks existing supported endpoints & if so, returns appopriate calls.
 * @param req Request object from API query
 * @param res Response object from API query
 */
export const get = (req: Request, res: Response) => {
  // Strip the leading '/' from the path for eacher training her on enum implementation
  const path = req.path.replace('/', '');
  switch (path) {
    case GetEndpoints.animals:
      res.send(getSampleAnimals());
      break;
    case GetEndpoints.hello:
      res.send(
        `Howdy.  This comes from an enum implementation for supported endpoints.  The value of GetEndPoints is '${GetEndpoints.hello}'`
      );
      break;
    case GetEndpoints.decorators:
      res.send([createPerson(), createPerson()]);
      break;
    default:
      res
        .status(404)
        .send(
          `We currently do not support the endpoint '${
            req.path
          }'.  We currently support - ${getSupportedGetEndpoints()}`
        );
  }
};
