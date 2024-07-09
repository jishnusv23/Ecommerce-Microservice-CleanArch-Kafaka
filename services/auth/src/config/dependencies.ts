import * as repositories from "../infrastructure/database/mongodb/repositories";
import { IDepedencies } from "../application/interfaces/IDependencies";
import * as useCases from "../application/useCases";

export const dependencies: IDepedencies = {
  useCases,
  repositories
};
