import { AddUserCase, loginAdminUseCases } from "../../domain/useCaseInterface";
import { IDepnedencies } from "./IDependencies";

export interface IUsecase {
  loginAdminUseCase: (dependencies: IDepnedencies) => loginAdminUseCases;
  AddUsercase:(dependencies:IDepnedencies)=>AddUserCase
}