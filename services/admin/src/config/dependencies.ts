import { IDepnedencies } from "../application/interface/IDependencies";
import * as repositories from '../infrastructure/database/mongoDB/repositories'
import * as useCase from '../application/useCases'

export const dependencies:IDepnedencies={
    repositories,
    useCase
}