import { NextFunction, Request, Response } from "express";
import { IDepedencies } from "../../application/interfaces/IDependencies";
import generateToken from "../../utils/jwt/generateToken";
import { userEnitites } from "../../domain/entities";

export const loginController = (dependencies: IDepedencies) => {
  const {
    useCases: { loginUserCase },
  } = dependencies;
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      console.log(req.body);
      const credentials = req.body;
      const { email, password } = req.body;
      if (!email || !password) {
        res
          .status(404)
          .json({ success: true, message: "Email and Password is Requried" });
        return;
      }
      const user: userEnitites | null = await loginUserCase(
        dependencies
      ).execute(credentials);
      if (user) {
        const userId = user._id?.toString() ?? "";
        const token = generateToken({
          userId: userId,
          userEmail: user.email,
          isAdmin: user.isAdmin,
          isBlocked: user.isBlocked,
        });
        res.cookie("auth", token, {
          maxAge: 100 * 60 * 60 * 24,
          httpOnly: true,
        });
        res
          .status(201)
          .json({ success: true, data: user, message: "Login successfull" });
      } else {
        res
          .status(401)
          .json({ success: false, message: "Invalid Email or Password" });
      }
    } catch (error) {
      next(error);
    }
  };
};
