import * as repositories from "../infrastructure/database/mongoDB/repositories";
import { IDpendencies } from "../application/interface/IDependencies";
import * as useCases from "../application/useCases";

export const dependencies: IDpendencies = {
  repositories,
  useCases
};
