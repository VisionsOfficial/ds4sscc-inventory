import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../../utils/jwt"; 

export const adminCheck = (req: Request, res: Response, next: NextFunction) => {
	try {
		if (!req.headers[process.env.X_AUTH_HEADER]) throw new Error("No admin auth header");
		const token = req.headers[process.env.X_AUTH_HEADER];
		if (!verifyToken(token.toString())) throw new Error("Invalid token");
		else next();
	} catch (err) {
		return res.status(401).json({ error: "Authentication error" });
	}
};
