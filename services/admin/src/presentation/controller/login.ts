import { NextFunction, Request, Response } from "express";
import { IDepnedencies } from "../../application/interface/IDependencies";
import { AdminEntities } from "../../domain/entities";
import jwt from "jsonwebtoken";

export const loginController = (dependencies: IDepnedencies) => {
  console.log(dependencies, "<-------------------->");
  const {
    useCase: { loginAdminUseCase },
  } = dependencies;
  const loginAdmin = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const admincredentails = req.body;
      const admin: AdminEntities | null = await loginAdminUseCase(
        dependencies
      ).execute(admincredentails);
      console.log("👽 ~ file: login.ts:19 ~ loginController ~ admin:", admin);
      if (admin) {
        if (admin.role === "admin") {
          const payload = {
            _id: String(admin._id),
            email: admin?.email!,
            role: admin?.role!,
          };

          const accesstoken = await jwt.sign(
            payload,
            String(process.env.ACCESS_TOKEN),
            { expiresIn: "1h" }
          );

          res.cookie("user_jwt", accesstoken, {
            httpOnly: true,
          });

          res.status(200).json({
            success: true,
            user: admin,
            messages: "Admin is verifyed",
          });
        } else {
          res
            .status(400)
            .json({
              success: false,
              message: "Unautharized role its not provide",
            });
        }
      } else {
        res.status(400).json({ success:false,message:'Unauthorized'});
      }
    } catch (error: any) {
        next(error)
    }
  };
  return loginAdmin
};
