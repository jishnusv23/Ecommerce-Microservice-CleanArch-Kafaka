import {
  ILoginUserUseCase,
  IFindUserEmailUseCase,
  ISingupUserUseCase,
} from "../../domain/useCaseIntreface";
import { IDepedencies } from "./IDependencies";

export interface IUseCases {
  singupUserUseCase: (dependencies: IDepedencies) => ISingupUserUseCase;
  loginUserCase: (dependencies: IDepedencies) => ILoginUserUseCase;
  findUserByEmialUseCase: (dependencies: IDepedencies) => IFindUserEmailUseCase;
}
