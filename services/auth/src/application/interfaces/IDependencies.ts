import { IRepositories } from "./IRepositories";
import {IUseCases} from './IUseCases'

export interface IDepedencies {
  repositories: IRepositories;
  useCases:IUseCases
}
//*a=IDependencies