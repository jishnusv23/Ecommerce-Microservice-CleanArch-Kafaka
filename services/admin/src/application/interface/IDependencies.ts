import { IRepositories } from "./IRepositories";
import { IUsecase } from "./IUseCases";


export interface IDepnedencies{
    repositories:IRepositories,
    useCase:IUsecase
}