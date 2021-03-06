import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

interface TokenPayload {
    id: string;
    iat: string;
    exp: string;
};

export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization)
        return res.sendStatus(401);

    const token = authorization.replace('Bearer', '').trim();

    try {
        const data = jwt.verify(token, 'secret');
        const { id } = data as TokenPayload;

        req.userId = id;

        return next();
        
    } catch (error) {
        return res.sendStatus(401)
    }
}