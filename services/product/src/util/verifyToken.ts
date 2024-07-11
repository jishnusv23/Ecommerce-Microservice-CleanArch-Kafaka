import jwt from "jsonwebtoken";

export const verifyToken = (token: string): any => {
  const secretKey: jwt.Secret = process.env.ACCESS_TOKEN as jwt.Secret;
  try {
    const decodeToken=jwt.verify(token,secretKey)
    return decodeToken
  } catch (error: any) {
    throw new Error(error?.message)
  }
};
