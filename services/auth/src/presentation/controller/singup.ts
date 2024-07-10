import { NextFunction, Request, Response } from "express";
import { IDepedencies } from "../../application/interfaces/IDependencies";
import { hashPassword } from "../../utils/bcrypt/hashPassword";
import generateToken from "../../utils/jwt/generateToken";

export const singupController = (dependencies: IDepedencies) => {
  const {
    useCases: { singupUserUseCase, findUserByEmialUseCase },
  } = dependencies;

  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      console.log(req.body);
      const credentials = req.body;
      if (!credentials.username || !credentials.username.trim()) {
        res.status(400).json({
          success: false,
          message: "userName is requried cannot be empty ",
        });
        return;
      }
      if (!credentials.email || !credentials.password) {
        res
          .status(400)
          .json({ success: false, message: "Email and Password is required" });
        return;
      }
      const EmailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!EmailRegex.test(credentials.email)) {
        res
          .status(400)
          .json({ success: false, message: "Invalid email format" });
        return;
      }
      //*checking the password length
      if (credentials.password.length < 6) {
        res.status(400).json({
          success: false,
          message: "password must be at least 6  characters long ",
        });

        return;
      }
      console.log(
        "searching for the email is already exists or not",
        credentials.email
      );
      try {
        const existingUser = await findUserByEmialUseCase(dependencies).execute(
          credentials.email
        );
        console.log("Existing ", existingUser);
        if (existingUser) {
          res.status(400).json({
            success: false,
            message: "This is Email All Ready Exists",
          });
          return;
        }
      } catch (Error) {
        console.error("Mistake is FindEmail is or not ", Error);
      }
      //*has the password
      const hashedpassword: string | null = await hashPassword(
        credentials.password
      );
      credentials.password = hashedpassword;

      //*create user
      const user = await singupUserUseCase(dependencies).execute(req.body);
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

        //*success response
        res
          .status(201)
          .json({
            success: true,
            data: user,
            message: "User Created Successfully",
          });
      }
    } catch (error) {
      next(error);
    }
  };
};
