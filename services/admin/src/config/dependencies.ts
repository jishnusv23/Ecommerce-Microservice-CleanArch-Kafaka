import { IDepnedencies } from "../application/interface/IDependencies";
import * as useCase from '../application/useCases'
import * as repositories from '../infrastructure/database/mongoDB/repositories/indext'

export const dependencies:IDepnedencies={
    repositories,
    useCase
}
