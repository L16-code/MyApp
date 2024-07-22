import jwt,{ JwtPayload } from "jsonwebtoken";
import EnvConfig from "../config/envConfig";
import { Request, Response, NextFunction } from "express";

export interface CustomRequest extends Request {
    userEmail?: string | JwtPayload;
    UserId?: string | JwtPayload;
}
const env = EnvConfig();
const SecretKey = env.secretKey;
const verifyToken = (req: CustomRequest, res: Response, next: NextFunction): void => {
    const token = req.header('Authorization');

    if (!token) {
        res.status(401).json({ error: 'Access denied' });
        return;
    }

    try {
        const newToken = token.split(" ")[1];
        const decoded = jwt.verify(newToken, SecretKey) as JwtPayload;
        req.userEmail = decoded.userEmail;
        req.UserId = decoded.UserId;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};
export { verifyToken };